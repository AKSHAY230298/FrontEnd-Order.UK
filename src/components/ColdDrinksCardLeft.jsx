import React, { useEffect, useState } from 'react'
import "./ColdDrinksCardLeft.css"
import {BASE_URL} from "../services/helper"


const ColdDrinksCardLeft = ({postCartInfo,getCartData}) => {


  const[drinkData, setDrinkData] = useState([])

  const handleCart = (data)=>{
    console.log(data);
    postCartInfo(data)
    getCartData()
  }


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
            <div className="coldDrinksCard11">
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

export default ColdDrinksCardLeft
