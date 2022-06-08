import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_APP_ID)
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
