'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../_context/CartContext'
import CartApi from '../_utils/CartApi'
import Cart from './Cart'


// <Image src='/logo.svg' alt='logo' width={50} height={50}/>
// Home Explore Projects About Us Contact Us Blog primary

const Header = () => {

    const{cart,setCart} = useContext(CartContext)
    const {user} = useUser();

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        setIsLoggedIn(window.location.href.toString().includes('sign-in'))
    },[])

    const getCartItems = ()=>{
        CartApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res=>{
            console.log('response item',res?.data?.data)

            const Items = res?.data?.data

            Items.forEach(item=>{
                setCart((oldCart)=>[
                    ...oldCart,
                    {
                        id:item.id,
                        product: item.attributes?.products?.data[0]
                    }
                ])
            })

            
        })
    }

    useEffect(()=>{
        user&& getCartItems();
    },[user])

    const [openCart,setOpenCart] = useState(false);

    
    return !isLoggedIn && (
        <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <Link href='/'><Image src='/logo.svg' alt='logo' width={50} height={50}/></Link>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/"
                    >
                        Home
                    </Link>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                    >
                        Explore
                    </a>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                    >
                        Projects
                    </a>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                    >
                        About Us
                    </a>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                    >
                        Contact Us
                    </a>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                    >
                        Blog
                    </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                    {
                        !user ? 
                        <div className="sm:flex sm:gap-4">
                    
                        <Link
                            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                            href="/sign-in"
                        >
                            Login
                        </Link>
        
                        <div className="hidden sm:flex">
                            <Link
                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            href="/sign-up"
                            >
                            Register
                            </Link>
                        </div>
                        </div>
                        :
                        <div className='flex items-center gap-5 relative'>
                            <p onClick={()=>setOpenCart(!openCart)} className='flex gap-2 cursor-pointer'>
                                <ShoppingCart />({cart?.length})
                            </p>
                            <UserButton  afterSignOutUrl='/'/>
                            
                            {openCart && <Cart /> }
                        </div>
                    }
                

                <div className="block md:hidden">
                <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
    </header>
    )
}

export default Header