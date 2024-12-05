import React, { useEffect, useState } from 'react'
import "./ColdDrinksCard.css"
import {BASE_URL} from "../services/helper"

const ColdDrinksCard = ({postCartInfo,getCartData}) => {


  const[drinkData, setDrinkData] = useState([])


// data get from fries cart
const handleCart = (data)=>{
  console.log(data);
  postCartInfo(data)
  getCartData()
}



//data get from backend and set into cards
  const getDrinkDetails = async()=>{
    const response = await fetch(`${BASE_URL}/api/auth/cold_drinksInfo`,{
      method:"GET"

    })
    console.log(response);
    
    if(response.ok){
      let data = await response.json()
      console.log(data);
      setDrinkData(data.msg)
    }


  }

  useEffect(()=>{
    getDrinkDetails()
  },[])

 console.log(drinkData);
 






  return (
    <>
        <div className="coldDrinksCards">
        <h1>Cold Drinks</h1>
        <div className="coldDrinksCard">

          {
          drinkData.map((data)=>(
            <div className="coldDrinksCard1">
            <div className="cardLeft">
              <p>{data.head}</p>
              <p>{data.details}</p> 
              <p>₹ {data.price}</p>
            </div>
            <div className="cardRight">
              <div className="combiImg">
              <img src="cdrink1.png" alt="" />
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

export default ColdDrinksCard
