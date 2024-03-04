'use client'

import React,{useEffect,useState} from 'react'
import ProductList from './ProductList'
import ProductApi from '../_utils/ProductApi'

const ProductSection = () => {

    const [productList,setProductList]= useState([])

    useEffect(()=>{
        getLatestProducts_()
    },[])

    const getLatestProducts_=()=>{
        ProductApi.getLatestProducts().then(res=>{
            setProductList(res.data.data)
        })
    }

    return (
        <div className='px-10 md:px-20 bg-[#111827]'>
            <h1 className='mb-4 text-xl'>Our Latest Products</h1>
            <ProductList productList={productList} />
        </div>
    )
}

export default ProductSection