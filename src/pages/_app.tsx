// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import {VideoProvider} from '../hooks/useCripto'

import '../styles/global.css'
import '../Templates/Home/styles.css'
import '../Components/WalletList/styles.css'
import '../Components/Input/styles.css'
import '../Components/WalletList/CoinInfo/styles.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VideoProvider>
      <Component {...pageProps} />
    </VideoProvider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp