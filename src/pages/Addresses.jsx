import React, { useEffect, useState } from 'react';
import Respo_Navbar1 from '../ResponsivComponents/Respo_Navbar1';
import NavbarTop from '../components/NavbarTop';
import NavbarBtm1 from '../components/NavbarBtm1';
import "../pages/Addresses.css"
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Add_Address from '../components/Add_Address';
import {BASE_URL} from "../services/helper"


const Addresses = () => {


  const navigate = useNavigate()

  const handleBack=()=>{
    navigate("/order")
  }

  const [addAddressPg,setAddAddressPg] = useState(true);

  const handleAdd_Address= ()=>{
    setAddAddressPg(false)
  }


  const [addressData, setAddressData]=useState([])
  const [render,setRender] = useState(true)

//delete address
  const handleDeleteAddress = async(data)=>{
    const deleteResponse = await fetch (`${BASE_URL}/api/auth/delAddress`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    })
    const response = await fetch(`${BASE_URL}/api/auth/getAddressData`,{
      method:"GET",
    })
    if(response.ok){
      let getedData = await response.json()
      setAddressData(getedData.msg)
    }
  }


//get address
  const getAddressInfo = async ()=>{
    
    const response = await fetch(`${BASE_URL}/api/auth/getAddressData`,{
      method:"GET",
    })
    if(response.ok){
      let getedData = await response.json()
      setAddressData(getedData.msg)
    }
  }
// console.log(addressData);  




useEffect(()=>{
  getAddressInfo()
  
},[render,addAddressPg])

  return (
    <>
      <div className="addressMainContainer">
        <Respo_Navbar1 />
        
        <div className="addressNavbar">
          <div className="addressNav1">
            <NavbarTop />
          </div>
          
          <div className="addressNav2">
            <NavbarBtm1 />
          </div>
        </div>
        
        <div className="addressPlus">
          <div className="addressHead">
            < img onClick={handleBack} src="arrow-left.png" alt="" />
            <p> Your Addresses</p>
          </div>

          <div className="addresses">
            <div className="addAddressbox">
              <img onClick={handleAdd_Address} src="Frame 100.png" alt="" />
              <p>Add Address</p>
            </div>

            {
              addressData.map((data)=>(
                <div className="AddressData">
                <div className="addresData1">
                  <p>Mike Ross</p>
                  <div id="addressdefault">Default</div>
                </div>
  
                <div className="addresData2">
                  {data.address}
                </div>
  
                <div className="addresData3">Phone Number: {data.number}</div>
  
                <div className="addresData4">
                  <p>Edit</p>
                  <p onClick={()=>handleDeleteAddress(data)} >Remove</p>
                </div>
              </div>
              ))
            }

           
            

          </div>
        </div>

        <div className="addressFooter">
          <Footer />
        </div>

        {addAddressPg ? null : <Add_Address setRender={setRender} render ={render} setAddAddressPg = {setAddAddressPg} setAddressData={setAddressData}/>}

      </div>
    </>
  );
};

export default Addresses;
