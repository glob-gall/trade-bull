import Image from 'next/image'
import WalletList from '../../Components/WalletList'
function Home() {
  return (
      <div className="Base">
        <Image src="/icon.svg" alt="anarcocaptalist cow" width="90" height="90" />
        <WalletList/>
      </div>
    )
}
export default Home
