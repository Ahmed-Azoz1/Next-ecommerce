import React from 'react'
import ProductItem from './ProductItem'
import Link from 'next/link'
// {`/product-details/${pro.id}`}

const ProductList = ({productList}) => {
    return (
        <div className='grid gap-4 grid-cols-4 max-[425px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3'>
            {productList.map((pro,index)=>{
                return(
                    <div key={index}>
                        <Link rel="preload" href='/product-details/[productId]' as={`/product-details/${pro?.id}`}><ProductItem product={pro}/></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList