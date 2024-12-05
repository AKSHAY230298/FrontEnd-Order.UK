import React, { useState } from "react";
import logo from "../assets/LOGO1.png";
import "../components/SingUpForm.css";
import {BASE_URL} from "../services/helper"

import { useNavigate } from "react-router-dom";

const SignUpForm = () => {

  const navigate = useNavigate();

const [userInfo, setUserInfo]= useState({
  name : "",
  phone :"",
  email : "",
  password:""
})

const onChangeHandle = (e)=>{
  e.preventDefault;
  let name = e.target.name
  // console.log(`name ${name}`);
  let value = e.target.value
  // console.log(`value ${value}`);

  setUserInfo({
    ...userInfo,
    [name]:value
  })
}

const handleSubmit = async(e)=>{
  e.preventDefault()
  // console.log(userInfo);

  const response = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  console.log(response)

  if(response.ok){
    navigate("/")
  }else{
    alert("Email is already registered")
  }
  
}

const onHandleSignIn = ()=>{
  navigate("/")
}


  return (
    <>
      <div className="outerS">
        <div className="outerLogoS">
          <img src={logo} alt="" />
        </div>
        <p className="wlcmS">Welcome Back 👋</p>
        <p className="paraS">
          Today is a new day. It's your day. You shape it. <br />
          Sign in to start ordering
        </p>
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="emailDivS">
            <div className="userNameS">
              <label htmlFor="username">User Name </label>
              <input 
                type="username"
                name="name"
                id="userName"
                placeholder="eg.John A"
                onChange={onChangeHandle}

              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone Number </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your 10 digit mobile number"
                onChange={onChangeHandle}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Example@email.com"
                onChange={onChangeHandle}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="At least 8 characters"
                onChange={onChangeHandle}
              />
            </div>
            <button type="submit" className="conBtn" >Continue</button>
          </div>
        </form>
        <span>
          Already have an account? <span onClick={onHandleSignIn}>Sign in</span>
        </span>
      </div>
    </>
  );
};

export default SignUpForm;
