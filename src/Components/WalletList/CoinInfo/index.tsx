import Image from 'next/image'

function CoinInfo() {
  return (
      <div className="Item">
        <div className="criptoIcon">
          <Image src="/icon.svg" alt="bitcoin" width="100" height="100" className="criptoIcon-img"/>
        </div>
        <div className="info">
          <h2 className="name">Bitcoin</h2>
          <h3 className="value">$541,51</h3>
        </div>
        <strong className="profit">+24,32</strong>
        <button className="deleteCoin">X</button>
      </div>
    )
}
export default CoinInfo
