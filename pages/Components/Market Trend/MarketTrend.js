
import React from 'react'
import TrendItem from './TrendItem'
const MarketTrend = () => {
  return (
    <div className="px-20">
      <h2 className="text-4xl mb-5">Market Trend</h2>
      <div className="grid grid-cols-4 gap-x-5">
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </div>
    </div>
  )
}

export default MarketTrend
