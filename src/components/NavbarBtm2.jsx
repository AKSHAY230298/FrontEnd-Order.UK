import React, { useEffect, useState } from "react";
import "./NavbarBtm2.css";
import navLogo from "../assets/LOGO1.png";
import navUser from "../assets/Male User.png";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const NavbarBtm2 = () => {
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState([]);

  const info = {
    email: localStorage.getItem("email"),
  };

  const getInfo = async () => {
    const response = await fetch(
      `${BASE_URL}/api/auth/getProfileInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (response.ok) {
      let data = await response.json();
      console.log(data.msg);
      setuserInfo(data.msg);
    }
  };

  const handleProfilePg = () => {
    navigate("/profile");
  };

  const handleHomePg = () => {
    navigate("/home");
  };

  const handleProductPg = () => {
    navigate("/product");
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="Navbar2">
      <div className="navbox1">
        <img className="navlogo" src={navLogo} />
      </div>
      <div className="navbox2">
        <span onClick={handleHomePg}>Home</span>
        <span>Special Offers</span>
        <span onClick={handleProductPg} className="homespanP">
          Restaurants
        </span>
        <span>Track Order</span>
      </div>
      <div onClick={handleProfilePg} className="profile">
        <div className="profile1">
          <img src={navUser} alt="" className="user" />
          <span>hey {userInfo.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBtm2;
