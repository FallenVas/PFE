const main = async() => {
  const bitcoinFactory = await hre.ethers.getContractFactory('Bitcoin')
  const bitcoinContract = await bitcoinFactory.deploy()
  await bitcoinContract.deployed()
  console.log('Bitcoin contract address:', bitcoinContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('Link contract address:', linkContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log('Usdc contract address:', usdcContract.address)
  
  const solanaFactory = await hre.ethers.getContractFactory('Solana')
  const solanaContract = await solanaFactory.deploy()
  await solanaContract.deployed()
  console.log('Solana contract address:', solanaContract.address)
}
;(async()=> {
  try{
    await main()
    process.exit(0)
  }catch(error){
    console.error(error)
    process.exit(1)
  }
})()