import React,{useContext} from 'react'
import Image from 'next/image'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link'

const Cart = () => {

    const {cart,setCart} = useContext(CartContext)

    return (
        <div className='h-[300px] w-[300px] bg-gray-200 z-10 rounded-md border shadow-sm absolute mx-10 right-0 top-10 p-5 overflow-auto'>
            <div className="mt-4 space-y-6">
            <ul className="space-y-4">

                {
                    cart.map((item,index)=>{
                        
                        return(
                            
                            <li className="flex items-center gap-4" key={index}>
                                <Image className='rounded object-cover' width={75} height={75} alt='item' src={item?.product?.attributes?.Banner?.data?.attributes?.url}/>
                                <div>
                                <h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.attributes?.title}</h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                    <dt className="inline">Category:</dt>
                                    <dd className="inline">{item?.product?.attributes?.category}</dd>
                                    </div>

                                    <div>
                                    <dt className="inline">Price:</dt>
                                    <dd className="inline">{item?.product?.attributes?.price}</dd>
                                    </div>
                                </dl>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>

        <div className="space-y-4 text-center mt-5">
        <Link
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        >
            View my cart ({cart?.length})
        </Link>

        <Link
            href="/"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
            Continue shopping
        </Link>
        </div>


        </div>
    )
}

export default Cart