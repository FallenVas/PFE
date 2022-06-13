import type { NextPage } from 'next'
import Header from './Components/Header/Header'
import bg from './bg.svg'
import Image from 'next/image'
import Hero from './Components/Hero/Hero'
import MarketTrend from './Components/Market Trend/MarketTrend'
import CryptoInfo from './Components/CryptoInfo/CryptoInfo'
import TrendTable from './Components/TrendTable/TrendTable'
import Footer from './Components/Footer/Footer'
const Home: NextPage = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
      <div className="-z-10 w-full h-full absolute -top-10 left-0 opacity-70">
          <Image src={bg} alt="bg" layout="fill" className="-z-10" />
        </div>
        <Header />
        <Hero />
      </div>
      <MarketTrend />
      <CryptoInfo/>
      <TrendTable />
      <Footer />
    </div>
  )
}

export default Home
