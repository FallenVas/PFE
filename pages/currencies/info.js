import React, { useState, useCallback, useEffect, useContext } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useRouter } from 'next/router'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { CoinmarketContext } from '../../context/context'
import Spinner from '../Components/Spinner/Spinner'
import Chat from '../Components/Chat/Chat'
const info = () => {
  const [isLoading, setLoading] = useState(false)
  let { getTopTen } = useContext(CoinmarketContext)
  const [coin, setCoin] = useState(null)
  const setData = useCallback(async () => {
    try {
      const apiResponse = await getTopTen()
      return apiResponse.data
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTen])
  useEffect(() => {
    setLoading(true)
    const intiliazeData = async () => {
      const data = await setData()
      const symbole = getUrlData()
      const coin = data.find((item) => item.symbol === symbole)
      console.log(coin)
      setCoin(coin)
      const script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/tv.js'
      script.async = true
      const script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.async = true
      script2.innerHTML = `new TradingView.widget(
      {
      "container_id": "tradingVC",
      "autosize": true,
      "symbol": "${
        symbole !== 'USDT' ? 'BINANCE:' + symbole + 'USDT' : 'COINBASE:USDTUSD'
      }",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,  
      "allow_symbol_change": true,
    }
      )`
      setTimeout(() => {
        document.getElementById('tradingVC').appendChild(script)
      }, 1000)
      setTimeout(function () {
        document.getElementById('tradingVC').appendChild(script2)
      }, 2000)
      setLoading(false)
    }
    intiliazeData()
  }, [])
  const router = useRouter()
  const getUrlData = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get('symbole')
  }
  return (
    <div>
      {isLoading ? <Spinner /> : <></>}
      <Header />
      {coin && (
        <div className="grid pl-20 pr-10 grid-cols-3 gap-2">
          <div className=" col-span-2">
            <div className="flex gap-x-2 py-5">
              <p
                className="text-xs  opacity-30 hover:opacity-100 cursor-pointer"
                onClick={() => router.push('/')}
              >
                Cryptocurrencies
              </p>
              <p className="text-xs opacity-30">&gt;</p>
              <p className="text-xs">{coin.name}</p>
            </div>
            <div className="grid grid-cols-2 w-full border-b border-solid border-white border-opacity-10 pb-4">
              <div>
                <div className="flex gap-3 items-center">
                  <img src={coin.image} alt={coin.name} className="w-12 h-12" />{' '}
                  <h3 className="text-4xl text-white">{coin.name}</h3>
                  <p className="px-2 py-1 bg-[#C6C6C6] bg-opacity-10 rounded text-white opacity-40 text-xs capitalize">
                    {coin.symbol}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="px-1 py-[2px] bg-white bg-opacity-60 text-white w-fit rounded text-xs">
                    Rank #{coin.cmc_rank}
                  </p>
                </div>
              </div>
              <div className="inline-flex flex-col gap-2">
                <p className="text-white opacity-70 text-xs">
                  {coin.name} Price ({coin.symbol})
                </p>
                <div className="flex gap-x-3 items-center">
                  <p className="text-4xl font-bold">
                    ${coin.quote.USD.price.toFixed(2)}
                  </p>
                  <div
                    className={`rounded ${
                      coin.quote.USD.percent_change_24h > 0
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    } h-2/3 px-2 text-sm font-bold flex gap-1 items-center text-white`}
                  >
                    {coin.quote.USD.percent_change_24h > 0 ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                    {coin.quote.USD.percent_change_24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tradingVC"
              style={{ height: '400px' }}
              className="w-full mt-2"
            ></div>
          </div>
          <div className=' col-span-1'>
            <Chat coin={coin} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default info
