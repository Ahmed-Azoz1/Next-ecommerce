import React from 'react'
import Image from 'next/image'


const ProductBanner = ({product}) => {
    return (
        <div className='h-auto'>
            
            {
                product?.attributes?.Banner?.data?.attributes?.url ?  
                <Image className='rounded-lg' width={500} style={{ width: '100%', height: 'auto' }} sizes="100vw" height={400} src={product?.attributes?.Banner?.data?.attributes?.url} alt="product" />
                :<div className='w-[100%] h-[400px] bg-slate-600 rounded-lg animate-pulse'></div>
            }
        
        </div>
    )
}

export default ProductBanner