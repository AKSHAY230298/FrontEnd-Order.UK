import React from "react";
import "../components/Navbar.css";
import locationImg from "../assets/Location.png";
import basket from "../assets/Full Shopping Basket.png";
import frwdBtn from "../assets/Forward Button.png";
import navLogo from "../assets/LOGO1.png";
import userMale from "../assets/Male User.png"

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="nav1">
          <div className="nav1_1">
            <div className="strDiv">🌟</div>
            <p>
              Get 5% Off your first order,<span>Promo: ORDER5</span>
            </p>
          </div>
          <div className="nav1_2">
            <img src={locationImg} alt="" />
            <p>Regent Street, A4, A4201, London</p>
            <span> Change Location</span>
          </div>
          <div className="nav1_3">
            <img
              className="basket
            "
              src={basket}
              alt=""
            />
            <p>My Cart </p>
            <div className="blnk"></div>
            <img className="frwdBtn" src={frwdBtn} alt="" />
          </div>
        </div>
        <div className="nav2">
          <div className="nav2_1">
            <img src={navLogo} alt="" />
          </div>
          <div className="nav2_2">
            <div className="homeSpan">Home</div>
            <div className="bMenuSpan">Browse Menu</div>
            <div className="sOfferSpan">Special Offers</div>
            <div className="resturantSpan">Restaurants</div>
            <div className="TrackOrderSpan">Track Order</div>
          </div>
          <div className="nav2_3">
            <img src={userMale} alt="" className="maleLogo" />
            <span>Login/Signup</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
