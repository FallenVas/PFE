import React, { useState, useCallback, useEffect, useContext } from 'react'
import { CoinmarketContext } from '../../../context/context'
import TrendItem from './TrendItem'
const MarketTrend = () => {
  let { getTopTen } = useContext(CoinmarketContext)
  const [topTen, setTopTen] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      const apiResponse = await getTopTen()
      setTopTen(apiResponse.filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTen])
  return (
    <div className="px-20">
      <h2 className="text-4xl mb-5">Market Trend</h2>
      <div className="grid grid-cols-4 gap-x-5">
        {topTen && (
          <>
            <TrendItem
              name={topTen[0].name}
              symbol={topTen[0].symbol}
              logo={topTen[0].image}
              lastP={topTen[0].quote.USD.price}
              change1h={topTen[0].quote.USD.percent_change_1h}
            />
            <TrendItem
              name={topTen[1].name}
              symbol={topTen[1].symbol}
              logo={topTen[1].image}
              lastP={topTen[1].quote.USD.price}
              change1h={topTen[1].quote.USD.percent_change_1h}
            />
            <TrendItem
              name={topTen[2].name}
              symbol={topTen[2].symbol}
              logo={topTen[2].image}
              lastP={topTen[2].quote.USD.price}
              change1h={topTen[2].quote.USD.percent_change_1h}
            />
            <TrendItem
              name={topTen[3].name}
              symbol={topTen[3].symbol}
              logo={topTen[3].image}
              lastP={topTen[3].quote.USD.price}
              change1h={topTen[3].quote.USD.percent_change_1h}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default MarketTrend
