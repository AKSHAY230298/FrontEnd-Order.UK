import React from 'react'
import "../components/NavbarTop.css"
import locationImg from "../assets/Location.png";
import basket from "../assets/Full Shopping Basket.png";
import frwdBtn from "../assets/Forward Button.png";


const NavbarTop = ({setActiveCart}) => {

const handleActiveCart = ()=>{
  setActiveCart(false)
}

  return (
    <>
    
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
          <div onClick={handleActiveCart} className="nav1_3">
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
        
    
    </>
  )
}

export default NavbarTop
