import useCriptos from '../../hooks/useCripto'
import FormNewCurrencie from '../FormNewCurrencie'

import CoinInfo from './CoinInfo'

function WalletList() {
  const {items} = useCriptos()


  return (
      <div className="WalletList">
        {items.map((item,index) => <CoinInfo {...item} key={`${index}-${item.id}`}/>)}
        <FormNewCurrencie />
      </div>
    )
}
export default WalletList
