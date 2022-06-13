import React from 'react'
let styles = {
  td: 'px-2 py-3',
}
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
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
const TrendItem = ({
  number,
  logo,
  symbol,
  name,
  lastP,
  Change1h,
  Change1d,
  Change30d,
  chartData,
}) => {
  const labels = chartData.data.map((item) => item.day + new Date().getTime())
  const data = {
    labels: labels,
    datasets: [
      {
        data: chartData.data.map((item) => item.value.toFixed(2)).reverse(),
        backgroundColor: Change1d>0?'green':'red',
        borderColor: Change1d>0?'green':'red',
        pointRadius: 0,
      },
    ],
  }
  return (
    <tr className="border border-white border-solid border-opacity-10">
      <td className={styles.td}>{number}</td>
      <td className="flex items-center gap-2 px-2 py-3 ">
        <img src={logo} alt={name} className="w-12 h-12 mr-3" /> {name}{' '}
        <span className="opacity-20">|</span> {symbol}
      </td>
      <td className={styles.td}>${lastP ? lastP.toFixed(2) : 0}</td>
      <td
        className={`${styles.td}  ${
          Change1h > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {Change1h > 0 ? (
          <BsChevronUp className="mr-1 inline" />
        ) : (
          <BsChevronDown className="mr-1 inline" />
        )}
        {Change1h ? Change1h.toFixed(2) : 0}%
      </td>
      <td
        className={`${styles.td}  ${
          Change1d > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {Change1d > 0 ? (
          <BsChevronUp className="mr-1 inline" />
        ) : (
          <BsChevronDown className="mr-1 inline" />
        )}
        {Change1d ? Change1d.toFixed(2) : 0}%
      </td>
      <td
        className={`${styles.td}  ${
          Change30d > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {Change30d > 0 ? (
          <BsChevronUp className="mr-1 inline" />
        ) : (
          <BsChevronDown className="mr-1 inline" />
        )}
        {Change30d ? Change30d.toFixed(2) : 0}%
      </td>
      <td className={styles.td + ' w-32 h-6'}>
        <Line options={options} className="w-full h-full" data={data}></Line>
      </td>
      <td className={styles.td}>Trade</td>
    </tr>
  )
}

export default TrendItem
