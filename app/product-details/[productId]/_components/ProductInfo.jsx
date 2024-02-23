'use client'

import React from 'react'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'


const ProductInfo = ({product}) => {

    const {user} = useUser();
    const router = useRouter();

    const handleAddToCart =()=>{
        if(!user){
            router.push('/sign-in')
        }else{

        }
    }

    return (
        <>
        {
            product?.attributes?.title ? 
            <div>
                <h2 className='text-[24px]'>{product?.attributes?.title}</h2>
                <h2 className='text-[16px] text-gray-600 mt-4'>{product?.attributes?.category}</h2>
                <p className='text-[16px] mt-4'>{product?.attributes?.description[0]?.children[0]?.text}</p>
                <p className='text-[13px] text-gray-600 flex gap-2 mt-2 items-center'>
                    {product?.attributes?.instantDelivery ? <BadgeCheck className='text-green-500'/> : <AlertOctagon className='text-red-500'/>}
                    Eligible for Instant
                </p>
                <p className='text-[30px] text-primary mt-3'>$ {product?.attributes?.price}</p>
                <button onClick={()=>handleAddToCart()} className='flex gap-2 bg-teal-800 hover:bg-primary p-3 rounded-lg'><ShoppingCart /> Add To Cart</button>
            </div>
            : 
            <SkeletonProductInfo />
        }
    </>
    )
}

export default ProductInfo