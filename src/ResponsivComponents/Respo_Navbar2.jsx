import React, { useEffect, useState } from "react";
import "../ResponsivComponents/Respo_Navbar2.css";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const Respo_Navbar2 = ({ setMobileActiveCart }) => {
  const handleMobileCartClick = () => {
    setMobileActiveCart(false);
  };

  const navigate = useNavigate();

  const handleProfilePg = () => {
    navigate("/profile");
  };


  const [signInInfo, setSignInfo] =useState([]);

  const userInfo = {
    email:localStorage.getItem("email")
  }

  const getInfo = async ()=>{
    const response = await fetch (`${BASE_URL}/api/auth/getProfileInfo`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(userInfo)

      }
    )

    if(response.ok){
      let data = await response.json();
      console.log(data.msg);
      setSignInfo(data.msg)
      
    }
  }

  useEffect(()=>{
    getInfo()
  },[])



  return (
    <>
      <div className="respoNavbar2">
        <div onClick={handleProfilePg} className="respoNavbar2_1">
          <div className="navImg1">
            <img src="MikeImg.png" alt="" />
          </div>
          <span>Hey {signInInfo.name}</span>
        </div>
        <div onClick={handleMobileCartClick} className="respoNavbar2_2">
          <div className="basket_png">
            <img src="BasketImg1.png" alt="" />
          </div>
          <div className="cartText">
            <span>My Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Respo_Navbar2;
