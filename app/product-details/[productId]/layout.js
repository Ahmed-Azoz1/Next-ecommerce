'use client'

import BreadCrumb from '../../_components/BreadCrumb'
import ProductApi from '../../_utils/ProductApi'
import React,{useEffect,useState} from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'
import ProductList from '../../_components/ProductList'
import { usePathname } from 'next/navigation'


const Layout = ({params}) => {
    
    const [productDetails,setProductDetails] = useState({})
    const [categoryList,setCategoryList] = useState([])
    const path = usePathname();

    
    useEffect(()=>{ 
        getProductById_()
    },[])
    const getProductById_ = async ()=>{
        await ProductApi.getProductById(params.productId).then((res)=>{
            setProductDetails(res?.data?.data)
            getProductListByCategory(res?.data?.data)
        })
    }
    const getProductListByCategory = (product)=>{
        ProductApi.getProductsByCategory(product?.attributes?.category).then((res)=>setCategoryList(res?.data?.data))
    }

    return (
        <div className='px-10 py-8 md:px-28 bg-[rgba(24,36,65,0.76)]'>
            <BreadCrumb path={path}/>
            <div className='grid grid-cols-2 max-[768px]:grid-cols-1 gap-10 mt-6'>
                <ProductBanner product={productDetails}/>
                <ProductInfo product={productDetails}/>
            </div>
            <div>
                <h2 className='mt-20 text-xl mb-6'>Similar products</h2>
                {categoryList.length === 0 ? 
                <div className='grid gap-4 grid-cols-4 max-[425px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3'>
                    <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                    <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                    <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                    <div className='w-[100%] h-[270px] bg-slate-600 rounded-lg animate-pulse'></div>
                </div> : 
                <ProductList productList={categoryList} />}
            </div>
        </div>
    )
}

export default Layout