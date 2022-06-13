import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useMoralisQuery } from 'react-moralis'

import {
  bitcoinAbi,
  linkAbi,
  usdcAbi,
  solanaAbi,
  bitcoinAddress,
  linkAddress,
  usdcAddress,
  solanaAddress,
} from '../lib/constants'
export const CoinmarketContext = createContext()
export const CoinmarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis()
  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery('coins')

  const [currentAccount, setCurrentAccount] = useState(null)
  const [openBuyCryptoModel, setOpenBuyCryptoModel] = useState(false)
  const [fromToken, setFromToken] = useState('ETH')
  const [toToken, setToToken] = useState('bitcoin')
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get('ethAddress')
      setCurrentAccount(account)
    }
  }, [isAuthenticated])
  const getContractAddress = () => {
    if (fromToken === 'bitcoin') return bitcoinAddress
    if (fromToken === 'link') return linkAddress
    if (fromToken === 'usdc') return usdcAddress
    if (fromToken === 'solana') return solanaAddress
  }
  const getToAddress = () => {
    if (toToken === 'bitcoin') return bitcoinAddress
    if (toToken === 'link') return linkAddress
    if (toToken === 'usdc') return usdcAddress
    if (toToken === 'solana') return solanaAddress
  }
  const getToAbi = () => {
    if (toToken === 'bitcoin') return bitcoinAbi
    if (toToken === 'link') return linkAbi
    if (toToken === 'usdc') return usdcAbi
    if (toToken === 'solana') return solanaAbi
  }
  const mint = async () => {
    try {
      if (fromToken === 'ETH') {
        if (!isAuthenticated) return
        await Moralis.enableWeb3()
        const contractAddress = getToAddress()
        const abi = getToAbi()

        let options = {
          contractAddress,
          functionName: 'mint',
          abi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        }
        sendEth()
        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait()
        console.log(receipt)
        setOpenBuyCryptoModel(false)

      } else {
        swapTokens()
        setOpenBuyCryptoModel(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const swapTokens = async () => {
    try {
      if (!isAuthenticated) return
      await Moralis.enableWeb3()
      if (fromToken === toToken) return alert('you cannot swap the same token')
      const fromOptions = {
        type: 'erc20',
        amount: Moralis.Units.Token(amount, '18'),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      }
      const toMintOptions = {
        contractAddress: getToAddress(),
        functionName: 'mint',
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, '18'),
        },
      }
      let fromTransaction = await Moralis.transfer(fromOptions)
      let toMintTransaction = await Moralis.executeFunction(toMintOptions)
      let fromReceipt = await fromTransaction.wait()
      let toReceipt = await toMintTransaction.wait()
      console.log(fromReceipt)
      console.log(toReceipt)
    } catch (error) {
      console.log(error.message)
    }
  }
  const sendEth = async () => {
    if (!isAuthenticated) return
    const contractAddress = getToAddress()
    let options = {
      type: 'native',
      amount: Moralis.Units.ETH(0.01),
      receiver: contractAddress,
    }
    const transaction = await Moralis.transfer(options)
    const receipt = await transaction.wait()
    console.log(receipt)
  }
  const getTopTen = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data
    } catch (e) {
      console.log(e.message)
    }
  }
  const getChartData = async () => {
    try {
      const res = await fetch('/api/getChartData')
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
  const openModal = () => {
    setOpenBuyCryptoModel(true)
  }
  return (
    <CoinmarketContext.Provider
      value={{
        getTopTen,
        getChartData,
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
        coins
      }}
    >
      {children}
    </CoinmarketContext.Provider>
  )
}
