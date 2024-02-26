import React from 'react'
import Link from 'next/link'
import Image from 'next/image'




const page = () => {
    return (
        <div className='flex flex-col items-center justify-center px-5 mt-4'>
            <Image src='/verified.png' alt='check' width={130} height={130}/>
            <h2 className='text-[24px]'></h2>
            <h2 className='text-[17px] text-center mt-6 text-gray-100'>
                We sent an email with your order confirmation
                along with Digital Content
            </h2>
            <Link href='/' className='p-2 mt-6 text-white rounded-md bg-primary'>Go to Home</Link>
        </div>
    )
}

export default page