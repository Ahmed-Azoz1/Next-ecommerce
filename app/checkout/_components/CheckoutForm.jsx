'use client'

import React, { useContext, useState } from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useUser } from '@clerk/nextjs';
import CartApi from '../../_utils/CartApi';
import OrderApi from '../../_utils/OrderApi'
import { CartContext } from '../../_context/CartContext';


const CheckoutForm = ({amount}) => {


    const {cart,setCart} = useContext(CartContext)
    const {user} = useUser();

    const stripe = useStripe();
    const elements = useElements();

    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState();

    const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
        return;
    }


    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
    }

    createOrder();
    sendEmail();
    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
        handleError(submitError);
        return;
    }

    const res = await fetch('api/create-intent',{
        method:'POST',
        body:JSON.stringify({
            amount:amount
        })
    })
    const clientSecret = await res.json()
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
        clientSecret,
        elements,
        confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
        },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
        } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    const createOrder = ()=>{

        let productId = [];
        cart.forEach(el=>{
            productId.push(el?.product?.id)
        })

        const data = {
            data:{
                email:user.primaryEmailAddress.emailAddress,
                username:user.fullName,
                amount,
                products:productId
            }
        }

        OrderApi.createOrder(data).then(res=>{
            if(res){
                cart.forEach(el=>{
                    CartApi.deleteCartItem(el?.id).then(res=>{})
                })
            }
        })
    }


    const sendEmail = async()=>{
        const res = await fetch('api/send-email',{
            method:'POST',
            
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mx-32 md:mx-[320px] mt-16 bg-gray-100 p-6 rounded-lg'>
                    <PaymentElement />
                    <button disabled={!stripe} className='mt-4 w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-teal-400'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm;