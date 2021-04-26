import api from '../api'
import {createContext, useCallback, useContext, useEffect, useState} from 'react'


export type  CriptoItem = {
    id:string
    name:string
    image: string
    current_price: number
    amount: number
    price_paid:number
}
type StoragedCripto = {
    name:string
    amount:number
    price_paid:number
}
type ICriptoProvider = {
    items: CriptoItem[]
    addCripto(option:string,price:number,amount:number):void
    removeCripto(id:string,amount:number,price_paid:number):void
}

const CriptoContext = createContext({} as ICriptoProvider)

const useCriptos = ():ICriptoProvider =>{
    const context = useContext(CriptoContext)
    return context
}

export const VideoProvider:React.FC = ({children})=>{
    const [criptos,setCriptos] = useState<CriptoItem[]>([])

    useEffect(()=>{
        const criptos = localStorage.getItem("@CriptoBull:criptos")
        if(!criptos){
            return
        }
        const loadCriptos = async()=>{
            const storagedItems:StoragedCripto[] = JSON.parse(localStorage.getItem("@CriptoBull:criptos"))

            const stringItems = storagedItems.map(item=> item.name).toString()
            
            const {data} = await api.get('',{params:{ids: stringItems}})
            if(!data){
                return
            }
            
            const items = storagedItems.map(({price_paid,name,amount})=>{
                console.log("item>",price_paid,">",name,">",amount);
                
                const dataItem = data.find((item)=>item.id==name)
                console.log(">>>>>>>>>>>>>",dataItem);
                
                return{
                    id:name,
                    price_paid,
                    amount,
                    name: dataItem.name,
                    image: dataItem.image,
                    current_price:dataItem.current_price
                }
            })
            
            setCriptos(items)
        }
        loadCriptos()
        
    },[])

    const addCripto = useCallback(async (option:string,price:number,amount:number)=>{
        
        if(option=='' || price==0 || amount==0){
            console.log('err');
            return
        }
        const item:StoragedCripto = {
            amount,
            name:option,
            price_paid:price,
        }
        const storagedItems = JSON.parse(localStorage.getItem("@CriptoBull:criptos"))
        localStorage.setItem("@CriptoBull:criptos",JSON.stringify(storagedItems?[...storagedItems,item]:[item]))
        
        const {data} = await api.get('',{params:{ids: option}})
        
        const newCoin:CriptoItem = {
            id:option,
            amount:amount,
            name: data[0].name,
            image: data[0].image,
            price_paid:price,
            current_price:data[0].current_price
        }
        setCriptos(state=>{
            return [...state,newCoin]
        })
    },[])
    const removeCripto = useCallback((id:string,amount:number,price_paid:number)=>{
        setCriptos(state=>{
            const filterItems = state.filter(item=> {
                const notRemove = item.id !== id
                    || item.amount !== amount
                    || item.price_paid !==price_paid
                return notRemove
            })
            const localStorageItems = filterItems.map(({id,amount,price_paid})=>{
                const localItem:StoragedCripto = {
                    name:id,
                    amount,
                    price_paid
                }
                return localItem
            })
            localStorage.setItem("@CriptoBull:criptos",JSON.stringify(localStorageItems))
            return filterItems
        })
    },[])

    return (
        <CriptoContext.Provider value={{items:criptos,addCripto,removeCripto}}>
            {children}
        </CriptoContext.Provider>
    )
}

export default useCriptos;