import Image from 'next/image'
import React from 'react'
import hero from './hero.png'
const Hero = () => {
  return (
    <div className="px-20 grid grid-cols-2">
      <div className="inline-flex flex-col justify-center gap-5">
        <h1 className="text-5xl tracking-wide leading-tight font-bold w-3/4">
          CryptoSwap is More than{' '}
          <span className="gradientPrimary">Exchange</span>. It's a community
        </h1>
        <p className="text-lg leading-7 text-white">
          Only at CryptoCap, you can build a good portfolio and learn <br />
          best practices about cryptocurrency.
        </p>
        <div>
          <button className="py-2 px-6 text-center gradientBackground rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className=" overflow-hidden flex justify-center ">
        <Image src={hero} />
      </div>
    </div>
  )
}

export default Hero
