import React from 'react'
import "../ResponsivComponents/RespoPopuResto.css"
import { useNavigate } from 'react-router-dom'
const RespoPopuResto = () => {

const navigate = useNavigate();
const handleProductPg=()=>{
  navigate('/product')
}


  return (
    <>
    <div className="mhead_imgs">
        <p className="mRestoHeading">Popular Restaurants</p>
        <div className="mrestoImgs">
          <img onClick={handleProductPg} src="mc.png" alt="" />
          <img onClick={handleProductPg} src="pj.png" alt="" />
          <img onClick={handleProductPg} src="kfc.png" alt="" />
          <img onClick={handleProductPg} src="texas.png" alt="" />
          <img onClick={handleProductPg} src="burK.png" alt="" />
          <img onClick={handleProductPg} src="sha.png" alt="" />
        </div>
      </div>
    
    
    </>
  )
}

export default RespoPopuResto
