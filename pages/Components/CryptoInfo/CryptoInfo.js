import React from 'react'

const CryptoInfo = () => {
  return (
    <div className="px-20 mt-10">
      <div className="px-4 py-2 flex justify-between items-center border rounded-xl border-white border-opacity-10">
        <div>
          <p className="text-2xl font-semibold leading-loose text-gray-100">
            New To Cryptocurrency?
          </p>
          <p className="text-base leading-7 text-gray-400 w-2/3">
            We'll tell you what cryptocurrencies are, how they work and why you
            should own one right now. So let's do it.
          </p>
        </div>
        <button className='px-6 py-4 bg-green-500 rounded-lg'>Learn & Explore Now</button>
      </div>
    </div>
  )
}

export default CryptoInfo
