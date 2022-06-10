import React, { useState, useCallback, useEffect, useContext } from 'react'
import { CoinmarketContext } from '../../../context/context'
import TrendItem from './TrendItem'

const TrendTable = () => {
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
          {topTen &&
            topTen.map((item, index) => (
              <TrendItem
                key={index}
                number={index + 1}
                logo={item.image}
                symbol={item.symbol}
                name={item.name}
                lastP={item.quote.USD.price}
                Change1h={item.quote.USD.percent_change_1h}
                Change1d={item.quote.USD.percent_change_24h}
                Change30d={item.quote.USD.percent_change_30d}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrendTable
