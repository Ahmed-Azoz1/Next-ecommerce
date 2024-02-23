'use client'

import React,{useState,useEffect} from 'react'
import { useUser } from '@clerk/nextjs'


const Footer = () => {

    const {user} = useUser();

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        setIsLoggedIn(window.location.href.toString().includes('sign-in'))
    },[])

    return !isLoggedIn && (
        <div>Footer</div>
    )
}

export default Footer