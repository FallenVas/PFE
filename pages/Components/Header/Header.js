import React from 'react'
import Image from 'next/image'
import Logo from './Logo.svg'
import { ConnectButton } from 'web3uikit'
import { useRouter } from 'next/router'

const styles = {
    navLink : 'hover:gradientPrimary cursor-pointer font-semibold'
}

const Header = () => {
  const router = useRouter()
  return (
    <div className=' py-5 px-20 flex justify-between items-center border-b border-solid border-black'>
        <div className='flex gap-2 cursor-pointer' onClick={()=> router.push('/')}>
            <Image width={50} height={50} src={Logo} />
            <h2 className='gradientPrimary text-4xl font-bold'>CryptoSwap</h2>
        </div>
        <div className='flex gap-10'>
             <a className={styles.navLink}>Home</a>   
             <a className={styles.navLink}>AboutUs</a>   
             <a className={styles.navLink}>Services</a>   
             <a className={styles.navLink}>ContactUs</a>   
        </div>
        <div>
            <ConnectButton />
        </div>
    </div>
  )
}

export default Header