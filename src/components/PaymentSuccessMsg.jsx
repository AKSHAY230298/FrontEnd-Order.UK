import React from 'react'
import "../components/PaymentSuccessMsg.css"
import { useNavigate } from 'react-router-dom'

const PaymentSuccessMsg = () => {

const navigate = useNavigate()

const handleHomePg=()=>{
  navigate("/home")
}

  return (
    <>
        <div className="paymentSuccessMsg">
            <img src="paymentSuccessImg.png" alt="" />
            <p>Order Placed Successfully</p>
            <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
            <div className="menuBox_Btn">
                <p>Royal Cheese Burger</p>
                <p>Potato Veggies</p>
                <p>Coke Coca Cola </p>
                <div onClick={handleHomePg} className="backHomeBtn">Back to Home</div>
            </div>
        </div>
    </>
  )
}

export default PaymentSuccessMsg
