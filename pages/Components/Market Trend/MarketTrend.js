import React, { useState, useCallback, useEffect, useContext } from 'react'
import { CoinmarketContext } from '../../../context/context'
import TrendItem from './TrendItem'
const MarketTrend = () => {
  let { getTopTen , getChartData } = useContext(CoinmarketContext)
  const [topTen, setTopTen] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      const apiResponse = await getTopTen()
      setTopTen(apiResponse.data)
      const chartResponse = await getChartData()
      setChartData(chartResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTen , getChartData])
  return (
    <div className="px-20">
      <h2 className="text-4xl mb-5">Market Trend</h2>
      <div className="grid grid-cols-4 gap-x-5">
        {topTen && chartData && (
          <>
            <TrendItem
            chartData={chartData.data[0]}
              name={topTen[0].name}
              symbol={topTen[0].symbol}
              logo={topTen[0].image}
              lastP={topTen[0].quote.USD.price}
              change1h={topTen[0].quote.USD.percent_change_1h}
            />
            <TrendItem
            chartData={chartData.data[1]}
              name={topTen[1].name}
              symbol={topTen[1].symbol}
              logo={topTen[1].image}
              lastP={topTen[1].quote.USD.price}
              change1h={topTen[1].quote.USD.percent_change_1h}
            />
            <TrendItem
            chartData={chartData.data[2]}
              name={topTen[2].name}
              symbol={topTen[2].symbol}
              logo={topTen[2].image}
              lastP={topTen[2].quote.USD.price}
              change1h={topTen[2].quote.USD.percent_change_1h}
            />
            <TrendItem
            chartData={chartData.data[3]}
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
