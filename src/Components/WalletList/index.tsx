import Input from '../Input'
import CoinInfo from './CoinInfo'

function WalletList() {
  return (
      <div className="WalletList">
        <CoinInfo/>
        <CoinInfo/>
        <CoinInfo/>
        <CoinInfo/>

        <div className="addCoin">
        <select name="pets" id="pet-select" className="Select">
          <option value="">Coin</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Etherium">Etherium</option>
          <option value="Binance Coin">Binance Coin</option>
          <option value="Chilliz">Chilliz</option>
          <option value="Polkadot">Polkadot</option>
          <option value="Uniswap">Uniswap</option>
          <option value="VeChain">VeChain</option>
          <option value="ChainLink">ChainLink</option>
          <option value="Monero">Monero</option>
        </select>
        <Input name="Price" label="Price" placeholder="$00.00"/>
        <Input name="Amount" label="Amount" placeholder="0.005 Btc"/>
        <button type="submit" className="addCoinButton">+</button>
        </div>
      </div>
    )
}
export default WalletList
