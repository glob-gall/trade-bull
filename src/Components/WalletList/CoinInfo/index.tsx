import useCriptos, {CriptoItem} from '../../../hooks/useCripto'

function CoinInfo({image,name,amount,price_paid,current_price,id}:CriptoItem) {
  const {removeCripto} = useCriptos()

  const profit = (current_price*amount)-(amount*price_paid)
  const profitState = !!(profit>0)
  return (
      <div className="Item">
        <div className="criptoIcon">
          <img src={image} alt="bitcoin" className="criptoIcon-img"/>
        </div>
        <div className="info">
          <h2 className="name">{name} ({current_price})</h2>
          <h3 className="value">${current_price*amount}</h3>
        </div>
        <strong 
          className={"profit "+(profitState?'green':'red')}
        >
          {profitState?'+':'-'}${profitState?profit:profit*(-1)}
        </strong>
        <button className="deleteCoin" onClick={()=>removeCripto(id,amount,price_paid)}>X</button>
      </div>
    )
}
export default CoinInfo
