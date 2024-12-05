import React, { useEffect, useState } from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarBtm2 from "../components/NavbarBtm2";
import "./Product.css";

import FoodMenuComp from "../components/FoodMenuComp";
import MCItemsBanner from "../components/MCItemsBanner";
import BurgerCards from "../components/BurgerCards";
import FriesCard from "../components/FriesCard";
import ColdDrinksCard from "../components/ColdDrinksCard";
import CustomerRiviewCards from "../components/CustomerRiviewCards";
import PopularResto from "../components/PopularResto";
import Footer from "../components/Footer";

import Map from "../components/Map";
import BasketBar from "../components/BasketBar";
import Respo_Navbar1 from "../ResponsivComponents/Respo_Navbar1";
import Respo_Navbar2 from "../ResponsivComponents/Respo_Navbar2";
import RespoCustomerReview from "../ResponsivComponents/RespoCustomerReview";
import RespoFooter from "../ResponsivComponents/RespoFooter";

import BurgerCardsLeft from "../components/BurgerCardsLeft";
import ColdDrinksCardLeft from "../components/ColdDrinksCardLeft";
import MCItemsBannerLeft from "../components/MCItemsBannerLeft";
import FriesCardLeft from "../components/FriesCardLeft";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"

// import NavbarBtm from "../components/NavbarBtm";

const Product = () => {
  const MobileView = () => {
    return {
      width: window.innerWidth,
    };
  };

  const [mobileWidth, setMobileWidth] = useState(MobileView());

  useEffect(() => {
    const screenWidth = () => {
      setMobileWidth(MobileView());
    };
    window.addEventListener("resize", screenWidth);
  });

  const [activeCart, setActiveCart] = useState(true);


  const [mobileActiveCart, setMobileActiveCart] = useState(true);

  const handleCross=()=>{
    setMobileActiveCart(true)
  }

  
  const [cartData, setCartData]= useState([])

  





  const postCartInfo = async(data)=>{
    const response = await fetch(`${BASE_URL}/api/auth/addInCart`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },  
      body:JSON.stringify(data)
    })
  }

  const getCartData = async()=>{
    const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`,{
      method:"GET"
    })

    console.log(response);

    if(response.ok){
      const data = await response.json()
      setCartData(data.msg)
    }

    
}

useEffect(()=>{
  getCartData()
},[])

  return (
    <>
      {mobileWidth.width > 768 ? (
        <div className="productMainContainer">
          <div className="productNavbar">
            <div className="productNav1">
              <NavbarTop setActiveCart={setActiveCart} />
            </div>

            <div className="productNav2">
              <NavbarBtm2 />
            </div>
          </div>

          <div className="PrdtBodyImg">
            <img className="prdtBanner" src="prdtMcImg.jpg" alt="" />
          </div>
          <div className="McOffer">
            <p className="McOfferL">All Offers from McDonald’s East London</p>
            <div className="McOfferR">
              <img src="SearchMore.png" alt="" />
              <input type="text" placeholder="Search from menu..." />
            </div>
          </div>

          <div className="foodMenuBar">
            <FoodMenuComp />
          </div>

          {activeCart ? (
            <>
              <div className="McItems">
                <MCItemsBanner />
              </div>

              <div className="burgers">
                <BurgerCards postCartInfo = {postCartInfo} getCartData={getCartData}/>
              </div>

              <div className="fries">
                <FriesCard postCartInfo = {postCartInfo} getCartData={getCartData}  />
              </div>

              <div className="coldDrinks">
                <ColdDrinksCard postCartInfo = {postCartInfo} getCartData={getCartData}/>
              </div>
            </>
          ) : (
            <>
              <div className="bannerANDcards">
                <div className="Left_Product_Div">
                  <MCItemsBannerLeft />
                  <BurgerCardsLeft postCartInfo = {postCartInfo} getCartData={getCartData}  />
                  <FriesCardLeft postCartInfo = {postCartInfo} getCartData={getCartData}  />
                  <ColdDrinksCardLeft  postCartInfo = {postCartInfo} getCartData={getCartData} />
                </div>
                <div className="cartBarDiv">
                  <BasketBar cartData = {cartData} setCartData={setCartData} />
                </div>
              </div>
            </>
          )}

          <div className="infoPage">
            <img src="infoBanner.jpg" alt="" />
          </div>

          <div className="Map">
            <Map />
          </div>

          <div className="customerRiviews">
            <CustomerRiviewCards />
          </div>

          <div className="popuResto">
            <PopularResto />
          </div>

          <div className="ProductFooter">
            <Footer />
          </div>

          
        </div>
      ) : (
        <>

        {mobileActiveCart ?  <>
        
        <div className="P_responsiveNavbar1">
          <Respo_Navbar1 />
        </div>
        <div className="responsiveNavbar2">
          <Respo_Navbar2 setMobileActiveCart = {setMobileActiveCart}/>
        </div>
        <div className="P_AddressBar">
          <img src="Location1.png" alt="" />
          <span>Lution Street, N4G-00....</span>
        </div>
        <div className="P_bannerImg">
          <img src="ProductPGB.jpg" alt="" />
        </div>

        <div className="P_foodMenuBar">
          <FoodMenuComp />
        </div>

        <div className="burgers">
          <BurgerCards postCartInfo = {postCartInfo} getCartData={getCartData} />
        </div>

        <div className="fries">
          <FriesCard postCartInfo = {postCartInfo} getCartData={getCartData} />
        </div>

        <div className="coldDrinks">
          <ColdDrinksCard postCartInfo = {postCartInfo} getCartData={getCartData} />
        </div>

        <div className="popuResto">
          <PopularResto />
        </div>

        <div className="P_CustomerRiviews">
          <RespoCustomerReview />
        </div>

        <div className="P_Map">
          <Map />
        </div>

        <div className="P_RespoFooter">
          <RespoFooter />
        </div>
      </> : 
      <div className="BasketCheckOutBar">
           <img onClick={handleCross} src="closeIcon.png" alt="" />
          <BasketBar cartData={cartData} setCartData={setCartData}/>
        </div> 
      
      }
        </>
      )}
    </>
  );
};

export default Product;
