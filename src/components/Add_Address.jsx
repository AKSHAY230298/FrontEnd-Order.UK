import React, { useState } from 'react';
import '../components/Add_Address.css'
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../services/helper"

const Add_Address = ({setAddAddressPg, setAddressData,setRender,render})=> {


   const [addressInfo, setAddressInfo] = useState({
      address:"",
      number:""
    });

    const handleChange = (e)=>{
         e.preventDefault();
         let name = e.target.name;
         let value = e.target.value

         setAddressInfo({
            ...addressInfo,
            [name]:value
         })

         
    };

    const handleSubmit = async(e)=>{
      e.preventDefault();
      setAddAddressPg(true)

      const response = await fetch(`${BASE_URL}/api/auth/addAddress`,{
         method : "POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(addressInfo)
      })
      console.log(response);
      if(response.ok){
         // setRender(!render)
         const response = await fetch(`${BASE_URL}/api/auth/getAddressData`,{
            method:"GET",
          })
          if(response.ok){
            let getedData = await response.json()
            setAddressData(getedData.msg)
          }
        }
      
      
    }




    const handleBack=()=>{
      setAddAddressPg(true)
    }    


     return (
    <div className='AddAddress'>
      <div className="asasc">
         <div className="asd">
            <img src="location.png" alt="" />
            <span>Add Address</span>
         </div>
         <div className="state">
            <input type="text" placeholder='State' />
            <input type="text" placeholder='City/District' />
            <input type="text" placeholder='Pin Code' />
            <input onChange={handleChange} type="text" name='number' placeholder='Phone Number' />
         </div>
         <textarea onChange={handleChange} name="address" id="" cols="30" rows="10"  placeholder='Enter full address' ></textarea>
         <div className='btns' ><button onClick={handleSubmit}  >Save</button> <button onClick={handleBack}>Cancel</button></div>
      </div>
    </div>
  );
}

export default Add_Address;