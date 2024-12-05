import React from 'react'
import "./FriesCardLeft.css"
import { useState, useEffect } from 'react';
import {BASE_URL} from "../services/helper"


const FriesCardLeft = ({postCartInfo,getCartData}) => {

  const [friesDetails,setFriesDetails]= useState([])


  const handleCart = (data)=>{
    console.log(data);
    postCartInfo(data)
    getCartData()
  }


const getFriesDetails = async ()=>{
  const response = await fetch (`${BASE_URL}/api/auth/friesInfo`,{
    method : "GET"
  })

if(response.ok){
  let friesData = await response.json()
  console.log(friesData);
  setFriesDetails(friesData.msg)
 
  
 
}
};

useEffect(()=>{
  getFriesDetails()
},[])

console.log(friesDetails);


  return (
    <>
        <div className="friesCards">
        <h1>Fries</h1>
        <div className="friesCard">
          {
            friesDetails.map((data)=>(
               <div className="friesCard11">
              <div className="cardLeft">
                <p>{data.head}</p>
                <p>{data.details}</p>
                <p>₹ {data.price}</p>
              </div>
              <div className="cardRight">
                <div className="combiImg">
                <img src="fries1.png" alt="" />
               <img src="btnImg1.png" alt="" />
                <img onClick={()=>handleCart(data)} src="btnImg2.png" alt="" />
                </div>
              </div>
            </div>
           
            ))
          }
         
        </div>
      </div>

    </>
  )
}

export default FriesCardLeft
