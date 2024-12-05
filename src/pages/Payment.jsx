import React from "react";
import "../pages/Payment.css";
import NavbarTop from "../components/NavbarTop";
import NavbarBtm1 from "../components/NavbarBtm1";
import Footer from "../components/Footer";
import PaymentSuccessMsg from "../components/PaymentSuccessMsg";
import { useState, useEffect } from "react";
import Respo_Navbar1 from "../ResponsivComponents/Respo_Navbar1";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"

// import Respo_Navbar1 from "../ResponsivComponents/Respo_Navbar1"

const Payment = () => {
  const [renderPage, setRenderPage] = useState(true);

  const handlePaymentPage = () => {
    setRenderPage(false);
  };


    const [paymentdata, setPaymentData] = useState([]);



  const getCartData = async () => {
    const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`, {
      method: "GET",
    });

    // console.log(response);

    if (response.ok) {
      const data = await response.json();
      setPaymentData(data.msg);
    }

    console.log(paymentdata);
  };

  const calculateTotal=(paymentdata)=> {
    return paymentdata.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price);
    }, 0);
  }

      const sum = calculateTotal(paymentdata);


  useEffect(() => {
    getCartData();
  }, []);

  const navigate = useNavigate();
  const handleBack =()=>{
    navigate("/order")
  }




  return (
    <>
      <div className="paymentMainContainer">
        <Respo_Navbar1 />
        <div className="paymentNavbar">
          <div className="paymentNav1">
            <NavbarTop />
          </div>

          <div className="paymentNav2">
            <NavbarBtm1 />
          </div>
        </div>

        {renderPage ? (
          <div className="chooseAndPay">
            <h1 onClick={handleBack}><img src="arrow-left.png" alt="" /> Choose and Pay </h1>
            <div className="wallet_PaymentProcess">
              <div className="walletDiv">
                <div className="walletPanel">
                  <div className="walletInput">
                    <img src="walletIcon.png" alt="" />
                    <div className="walletDetails">
                      <p>Wallet</p>
                      <p>Available balance: ₹300</p>
                    </div>

                    <div className="frwdArrow"> ＞ </div>
                  </div>
                </div>
                <div className="paymentOpt">
                  <div className="PaymentCard">
                    <div className="icon_Name">
                      <img src="mastercardimg.png" alt="" />
                      <p>MaestroKard</p>
                    </div>
                    <img src="Radio.png" alt="" />
                  </div>

                  <div className="PaymentCard">
                    <div className="icon_Name">
                      <img src="payPalImg.png" alt="" />
                      <p>Paypal</p>
                    </div>
                    <img src="Radio.png" alt="" />
                  </div>
                  <div className="PaymentCard">
                    <div className="icon_Name">
                      <img src="Stripe.png" alt="" />
                      <p>Stripe</p>
                    </div>
                    <img src="Radio.png" alt="" />
                  </div>
                  <div className="PaymentCard">
                    <div className="icon_Name">
                      <img src="addCardImg.png" alt="" />
                      <p>Add Debit Card</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProcessPayment">
                <div className="amt_to_pay">
                  <p>Amount to be payed</p>
                  <p>₹{sum+10}</p>
                </div>
                <div className="pay_process_btn">
                  <div onClick={handlePaymentPage} className="payBtn">
                    Proceed Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="paymentDoneMsg">
            <PaymentSuccessMsg />
          </div>
        )}

        <div className="PaymetFooter">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
