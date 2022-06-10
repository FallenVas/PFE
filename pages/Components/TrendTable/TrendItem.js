import React from 'react'
let styles = {
  td: 'px-2 py-3',
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
}) => {
  return (
    <tr className="border border-white border-solid border-opacity-10">
      <td className={styles.td}>{number}</td>
      <td className="flex items-center gap-2 px-2 py-3 ">
        <img src={logo} alt={name} className="w-12 h-12 mr-3" /> {name}{' '}
        <span className="opacity-20">|</span> {symbol}
      </td>
      <td className={styles.td}>${lastP.toFixed(2)}</td>
      <td className={`${styles.td} ${Change1h > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {Change1h?Change1h.toFixed(2):0}%
      </td>
      <td className={`${styles.td} ${Change1d > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {Change1d?Change1d.toFixed(2):0}%
      </td>
      <td className={`${styles.td} ${Change30d > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {Change30d?Change30d.toFixed(2):0}%
      </td>
      <td className={styles.td}>Stat</td>
      <td className={styles.td}>Trade</td>
    </tr>
  )
}

export default TrendItem
