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
        </select>
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
        <button type="submit" className="addCoinButton" onClick={handleSubmit}>+</button>
        </div>
    )
}
export default FormNewCurrencie