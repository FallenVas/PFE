import {   createContext , useState , useEffect } from 'react';
export const CoinmarketContext = createContext()
export const CoinmarketProvider = ({children}) => {
    const getTopTen = async()=>{
        try {
            const res = await fetch('/api/getTopTen')
            const data = await res.json()
            return data
        } catch (e) {
            console.log(e.message)
        }
    }
    return(
        <CoinmarketContext.Provider value={{getTopTen}}>
            {children}
        </CoinmarketContext.Provider>
    )
}
