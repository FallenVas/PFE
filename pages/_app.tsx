import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinmarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={
        process.env.NEXT_PUBLIC_APP_ID ? process.env.NEXT_PUBLIC_APP_ID : ''
      }
      serverUrl={
        process.env.NEXT_PUBLIC_SERVER ? process.env.NEXT_PUBLIC_SERVER : ''
      }
    >
      <CoinmarketProvider>
        <Component {...pageProps} />
      </CoinmarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
