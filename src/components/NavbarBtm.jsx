import React, { useEffect, useState } from "react";
import "./NavbarBtm.css";
import logo from "../assets/LOGO1.png";
import user from "../assets/Male User.png";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const NavbarBtm = () => {
  const [signInData, setSignData] = useState([]);

  const userInfo = {
    email: localStorage.getItem("email"),
  };

  const getUserInfo = async () => {
    const response = await fetch(
      `${BASE_URL}/api/auth/getProfileInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data.msg);
      
      setSignData(data.msg);
    }

};
useEffect(() => {
        getUserInfo()
 },[]);

  const navigate = useNavigate();

  const handleProfilePg = () => {
    navigate("/profile");
  };

const handleProductPg = ()=>{
  navigate("/product")
}


  return (
    <div className="Navbar2">
      <div className="navbox1">
        <img className="navlogo" src={logo} />
      </div>
      <div className="navbox2">
        <span className="homespan">Home</span>
        {/* <span>Brows Menu</span> */}
        <span>Special Offers</span>
        <span onClick={handleProductPg} >Restaurants</span>
        <span>Track Order</span>
      </div>
      <div onClick={handleProfilePg} className="profile">
        <div className="profile1">
          <img src={user} alt="" className="user" />
          <span>hey {signInData.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBtm;
