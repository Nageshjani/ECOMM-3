//Fetches product by using api 
//return products

import React from 'react'
import {useState, useEffect} from 'react'

import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:5050/api/products`)
            setProducts(res.data.products)
            
        }
        getProducts()
        
        

    },[])
    //console.log(typeof([products, setProducts])) ->Object
    //console.log(products)
    //console.log(setProducts)
    //console.log(typeof(products))

  return {
    products: [products, setProducts],
    
  }

}

export default ProductsAPI
