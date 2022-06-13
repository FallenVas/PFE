import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  CategoryScale,
  PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
ChartJS.register(CategoryScale, PointElement, LinearScale, LineElement)
export const options = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    x: {
       display: false,
    },
    y: {
       display: false,
    }
 },

}
import { BsArrowUpRight , BsChevronDown , BsChevronUp } from 'react-icons/bs'
const TrendItem = ({logo , lastP , name,symbol,change1h , chartData}) => {
  const labels = chartData.data.map((item) => item.day + new Date().getTime())
  const data = {
    labels: labels,
    datasets: [
      {
        data: chartData.data.map((item) => item.value.toFixed(2)).reverse(),
        backgroundColor: change1h>0?'green':'red',
        borderColor: change1h>0?'green':'red',
        pointRadius: 0,
      },
    ],
  }
  return (
    <div className="p-5 border-2 border-solid border-white rounded-2xl bg-gradient-to-br from-[#FFFCFC80] to-[#FFFFFF26]">
          <div className="flex justify-between mb-5">
            <div className="flex gap-3 items-center">
              <img width={30} height={30} src={logo} />
              <h3 className="text-base text-Black">{symbol}</h3>
              <p className="px-2 py-[2px] bg-[#C6C6C6] rounded text-Black text-[9px] capitalize">
                {name}
              </p>
            </div>
            <div className="p-2 bg-opacity-10 transition-all hover:scale-105 hover:-translate-y-1 bg-[#B6B6B6] rounded-full">
              <BsArrowUpRight className='text-white' />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className=' inline-flex flex-col gap-1'>
              <p className="w-36 text-2xl font-medium text-gray-900">
                ${lastP?lastP.toFixed(2):0}
              </p>
              <p className={`w-36 text-lg font-medium leading-7   ${change1h > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change1h > 0 ? <BsChevronUp className='mr-1 inline ' /> : <BsChevronDown className='mr-1 inline ' />}
                {change1h?change1h.toFixed(2):0}%
              </p>
            </div>
            <div>
          <Line options={options} className="w-full h-full" data={data}></Line>
          </div>
          </div>
          
        </div>
  )
}

export default TrendItem