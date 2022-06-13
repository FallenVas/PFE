import React, { useState, useCallback, useEffect, useContext } from 'react'
import { CoinmarketContext } from '../../../context/context'
import TrendItem from './TrendItem'

const TrendTable = (props) => {
  let { getTopTen , getChartData } = useContext(CoinmarketContext)
  const [topTen, setTopTen] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      props.setLoading(true)
      const apiResponse = await getTopTen()
      setTopTen(apiResponse.data)
      const chartResponse = await getChartData()
      setChartData(chartResponse)
      props.setLoading(false)

    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTen , getChartData])
  return (
    <div className="px-20 mt-10">
      <table className="w-full bg-white bg-opacity-5">
        <thead>
          <tr className="border border-white border-opacity-10">
            <td className="px-2 py-3">NO</td>
            <td>Name</td>
            <td>Last Price</td>
            <td>1H Change</td>
            <td>1D Change</td>
            <td>1M Change</td>
            <td>Market Stats</td>
            <td>Trade</td>
          </tr>
        </thead>
        <tbody>
          {topTen && chartData?
            topTen.map((item, index) => (
              <TrendItem
                chartData={chartData.data[index]}
                key={index + (new Date().getTime())}
                number={index + 1}
                logo={item.image}
                symbol={item.symbol}
                name={item.name}
                lastP={item.quote.USD.price}
                Change1h={item.quote.USD.percent_change_1h}
                Change1d={item.quote.USD.percent_change_24h}
                Change30d={item.quote.USD.percent_change_30d}
              />
            )):<></>}
        </tbody>
      </table>
    </div>
  )
}

export default TrendTable
