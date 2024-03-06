import React from 'react'
import Image from 'next/image'
import { AlignLeft } from 'lucide-react'

const ProductItem = ({product}) => {
    return (
        <>
            <div className='hover:transition hover:delay-200 hover:cursor-pointer duration-150 ease-in-out hover:border p-1 hover:shadow-md rounded-lg border-teal-500'>
                {
                    product?.attributes?.Banner?.data?.attributes?.url ? 
                    <Image className='rounded-t-lg h-[170px] object-cover' width={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" height={350} src={product?.attributes?.Banner.data.attributes.url} alt="product" />
                    :
                    <div className='h-[200px] max-w-[100%] bg-slate-600 rounded-lg animate-pulse'></div>
                }
                <div className='flex justify-between items-center py-3 px-4 bg-[rgba(20,30,54,0.58)] rounded-b-lg'>
                    <div>
                        <h2 className='text-[15px] font-medium mb-1 line-clamp-1'>{product?.attributes?.title}</h2>
                        <p className='text-[10px] text-gray-400 flex gap-2 items-center'>
                            <AlignLeft  className='w-4 h-4'/>
                            
                            {product?.attributes.category}
                        </p>
                    </div>
                    <p className=''>{product?.attributes?.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem