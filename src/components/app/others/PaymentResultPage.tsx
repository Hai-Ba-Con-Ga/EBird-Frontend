import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const PaymentResultPage = () => {
    const nav = useNavigate();
    useEffect(()=>{
        setTimeout(()=>nav("/app"),0)
    },[])
    
  return (
    <div><h1>Payment successfull, you will redirect to homepage</h1></div>
  )
}

export default PaymentResultPage