import React from 'react'
import "../pages/Order.css"
import Respo_Navbar1 from '../ResponsivComponents/Respo_Navbar1'
import NavbarTop from '../components/NavbarTop'
import NavbarBtm1 from '../components/NavbarBtm1'
import OrderDetails from '../components/OrderDetails'
import PopularResto from '../components/PopularResto'
import Footer from '../components/Footer'

const Order = () => {
  return (
    <>  

        <div className="orderMainContainer">
        <Respo_Navbar1 />
        <div className="orderNavbar">
          <div className="orderNav1">
            <NavbarTop />
          </div>

          <div className="orderNav2">
            <NavbarBtm1 />
          </div>
        </div>

        <div className="orderDetailsPG">
            <OrderDetails/>
        </div>

        <div className="orderRestoList">
            <PopularResto/>
        </div>

        <div className="orderFooter">
          <Footer />
        </div>





    
    </div>
    </>
  )
}

export default Order
