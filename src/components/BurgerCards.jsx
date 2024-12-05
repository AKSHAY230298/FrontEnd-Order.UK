import React, { useEffect, useState } from "react";
import "./BurgerCards.css";
import {BASE_URL} from "../services/helper"

const BurgerCards = ({postCartInfo,getCartData}) => {

  const [burgerDetails, setBurgerDetails] = useState([])

  const handleCart = (info)=>{
    console.log(info);
    postCartInfo(info)
    getCartData()

  }

  const getBurgerDetails = async () =>{
    const response = await fetch(`${BASE_URL}/api/auth/product_info`,{
      method: "GET",
    })

    console.log(response);  

    if(response.ok){
      let data = await response.json()
      console.log(data);
      setBurgerDetails(data.msg)
      
    }
    

  }

useEffect(()=>{
  getBurgerDetails()
},[])


console.log(burgerDetails)


  return (
    <>
      <div className="burgerCards">
        <h1>Burgers</h1>
        <div className="burCards">
          
          {
            burgerDetails.map((info)=>(
              <div className="burCard1">
              <div className="cardLeft">
                <p>{info.head}</p>
                <p>{info.details}</p>
                <p>₹ {info.price}</p>
              </div>
              <div className="cardRight">
                <div className="combiImg">
                <img src="cocaBgr1.png" alt="" />
               <img src="btnImg1.png" alt="" />
                <img onClick={()=>handleCart(info)} src="btnImg2.png" alt="" />
                </div>
              </div>
            </div>

            ))
          }
        </div>
      </div>
    </>
  );
};

export default BurgerCards;
