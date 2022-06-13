import React, { useContext } from 'react'
import { CoinmarketContext } from '../../../context/context'
const CryptoModal = () => {
  const {
    openBuyCryptoModel,
    setOpenBuyCryptoModel,
    fromToken,
    toToken,
    setFromToken,
    setToToken,
    amount,
    setAmount,
    mint,
    openModal,
    loadingCoins,
    coins,
  } = useContext(CoinmarketContext)
  if (openBuyCryptoModel) {
    return (
      <div className="w-screen h-screen bg-gray-900/90 z-30 fixed top-0 left-0 flex items-center justify-center">
        <div className="bg-[#1D1F3B] rounded-lg p-4 inline-flex flex-col gap-4  w-1/3">
          <h2 className="text-2xl text-white text-center font-bold">
            SWAP YOUR COINS
          </h2>
          <div>
            <label className="font-bold text-sm text-white">From Token</label>
            <select
              className="w-full p-2 border rounded-lg"
              placeholder="choose the from Token"
              onChange={(e) => setFromToken(e.target.value)}
              value={fromToken}
            >
              <option value="ETH">ETH</option>
              {coins.map((coin) => {
                if (!loadingCoins) {
                  return (<option
                    key={coin.id}
                    value={coin.attributes.name}
                    className="flex gap-1"
                  >
                    <div><img src={coin.attributes.logo} className="w-8 h-8" /> {coin.attributes.name}</div>
                  </option>)
                }
              })}
            </select>
          </div>
          <div>
            <label className="font-bold text-sm text-white">To Token</label>
            <select
              className="w-full p-2 border rounded-lg"
              placeholder="Choose the to Token"
              onChange={(e) => setToToken(e.target.value)}
              value={toToken}
            >
              {coins.map((coin) => {
                if (!loadingCoins) {
                  return(<option
                    key={coin.id}
                    value={coin.attributes.name}
                    className="relative"
                  >
                    <div><img src={coin.attributes.logo} className="w-16 h-8 absolute top-0 left-0" /> {coin.attributes.name}</div>
                  </option>)
                }
              })}
            </select>
          </div>
          <div>
            <label className="font-bold text-sm text-white">Amount</label>
            <input type={'number'} placeholder='how many to swap' onChange={e=>setAmount(e.target.value)} value={amount} className="w-full p-2 border rounded-lg" />
          </div>
          <div className="flex gap-2 justify-center">
            <button className="py-2 px-6 text-center gradientBackground rounded cursor-pointer" onClick={mint}>
              Swap
            </button>
            <button
              className="py-2 px-6 text-center bg-red-500 rounded cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setOpenBuyCryptoModel(false)
                setAmount(0)
                setFromToken(null)
                setToToken(null)
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default CryptoModal
