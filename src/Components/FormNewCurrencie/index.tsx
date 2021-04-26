import { useCallback, useState } from 'react'
import useCriptos from '../../hooks/useCripto'
import Input from '../Input'
function FormNewCurrencie() {
    const {addCripto} = useCriptos()

    const [option,setOption]=useState('')
    const [price,setPrice] = useState(0)
    const [amount,SetAmount] = useState(0)

    const handleSubmit = useCallback(()=>{
        addCripto(option,price,amount)
        setOption('')
        setPrice(0)
        SetAmount(0)
    },[option,price,amount])

    return(
        <div className="addCoin">
            <hr className="divisor"/>
        <div className="InputContainer">
            <select 
                name="criptos" 
                id="criptos-select" 
                className="Select" 
                value={option}
                onChange={e => setOption(e.target.value)}
                >
            <option value="">Coin</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Etherium</option>
            <option value="binancecoin">Binance Coin</option>
            <option value="chiliz">Chiliz</option>
            <option value="polkadot">Polkadot</option>
            <option value="uniswap">Uniswap</option>
            <option value="vechain">VeChain</option>
            <option value="chainlink">ChainLink</option>
            <option value="monero">Monero</option>
            <option value="ripple">Ripple</option>
            <option value="cardano">Cardano</option>
            <option value="dogecoin">Dogecoin</option>
            <option value="litecoin">Litecoin</option>
            <option value="pancakeswap-token">PancakeSwap</option>
            <option value="blowfish">BlowFish</option>
            </select>
        </div>
        <Input
            type="number"
            value={price}
            onChange={e=> setPrice(parseFloat(e.target.value))}
            name="Price"     
            label="Price"
            placeholder="$00.00"
        />
        <Input 
            type="number"
            value={amount}
            onChange={e=> SetAmount(parseFloat(e.target.value))}
            name="Amount" 
            label="Amount"
            placeholder="0.005"
        />
        <div className="InputContainer">
            <button type="submit" className="addCoinButton" onClick={handleSubmit}>+</button>
        </div>
        </div>
    )
}
export default FormNewCurrencie