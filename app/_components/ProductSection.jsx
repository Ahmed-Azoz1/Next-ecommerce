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
            {productList.length === 0 ? 
            <div className='grid gap-4 grid-cols-4 max-[425px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3'>
                <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
            </div> : 
            <ProductList productList={productList} />}
        </div>
    )
}

export default ProductSection