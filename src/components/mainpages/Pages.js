import React, {useContext} from 'react'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'

import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import {GlobalState} from '../../GlobalState'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


function Pages() {
    const state = useContext(GlobalState)
 


    return (
        <Routes>
            
            <Route path="/" element={Products} />
            <Route path="/detail/:id" element={DetailProduct} />
            

        </Routes>
    )
}

export default Pages
