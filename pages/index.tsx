import type { NextPage  } from 'next'
import Header from './Components/Header/Header'
import { useState } from 'react'
import bg from './bg.svg'
import Image from 'next/image'
import Hero from './Components/Hero/Hero'
import MarketTrend from './Components/Market Trend/MarketTrend'
import CryptoInfo from './Components/CryptoInfo/CryptoInfo'
import TrendTable from './Components/TrendTable/TrendTable'
import Footer from './Components/Footer/Footer'
import Spinner from './Components/Spinner/Spinner'
import CryptoModal from './Components/modal/CryptoModal'
const Home: NextPage = () => {
  const [isLoading , setLoading] = useState(false)
  return (
    <div>
      {isLoading ? <Spinner /> : null}
      <CryptoModal />
      <div className="relative h-screen overflow-hidden">
      <div className="-z-10 w-full h-full absolute -top-10 left-0 opacity-70">
          <Image src={bg} alt="bg" layout="fill" className="-z-10" />
        </div>
        <Header />
        <Hero />
      </div>
      <MarketTrend setLoading={setLoading} />
      <CryptoInfo/>
      <TrendTable setLoading={setLoading} />
      <Footer />
    </div>
  )
}

export default Home
