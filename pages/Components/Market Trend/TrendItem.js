import React from 'react'
import Image from 'next/image'
import bitcoin from './bitcoin.png'
import { BsArrowUpRight } from 'react-icons/bs'
const TrendItem = () => {
  return (
    <div className="p-5 border-2 border-solid border-white rounded-2xl bg-gradient-to-br from-[#FFFCFC80] to-[#FFFFFF26]">
          <div className="flex justify-between mb-5">
            <div className="flex gap-3 items-center">
              <Image width={30} height={30} src={bitcoin} />
              <h3 className="text-base text-Black">BTC</h3>
              <p className="px-2 py-[2px] bg-[#C6C6C6] rounded text-Black text-[9px] capitalize">
                BITCOIN
              </p>
            </div>
            <div className="p-2 bg-opacity-10 transition-all hover:scale-105 hover:-translate-y-1 bg-[#B6B6B6] rounded-full">
              <BsArrowUpRight className='' />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className=' inline-flex flex-col gap-1'>
              <p className="w-36 text-2xl font-medium text-gray-900">
                $56,623.54
              </p>
              <p className="w-36 text-lg font-medium leading-7 text-gray-400">
                1.41%
              </p>
            </div>
          </div>
        </div>
  )
}

export default TrendItem