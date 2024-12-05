import React from "react";
import "../components/PopularResto.css"
import { useNavigate } from "react-router-dom";

const PopularResto = () => {

  const navigate = useNavigate();
  const handleProductPage = ()=>{
    navigate("/product")
  }



  return (
    <>
      <div className="head_imgs">
        <p className="RestoHeading">Popular Restaurants</p>
        <div className="restoImgs">
          <img onClick={handleProductPage} src="pj.png" alt="" />
          <img onClick={handleProductPage} src="mc.png" alt="" />
          <img onClick={handleProductPage} src="kfc.png" alt="" />
          <img onClick={handleProductPage} src="texas.png" alt="" />
          <img onClick={handleProductPage} src="burK.png" alt="" />
          <img onClick={handleProductPage} src="sha.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default PopularResto;
