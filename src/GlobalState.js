import React from 'react'
import { createContext } from 'react'
import ProductsAPI from './api/ProductsAPI.js'
export const GlobalState=createContext()

export const DataProvider=({children})=>{
    //console.log(ProductsAPI())
    const state={
        productsAPI:ProductsAPI()
    }

   

//console.log({state.product})
//console.log(typeof(state.product))    
return(
    
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
)


}