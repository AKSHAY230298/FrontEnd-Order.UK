import React, { useState } from "react";
import logo from "../assets/LOGO1.png";
import "./LoginForm.css"
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const LoginForm = () => {

  const navigate = useNavigate()

let [logData, setLogData] = useState({
  email:"",
  password:""
})


const handleOnChangeData=(e)=>{
e.preventDefault();   
let name = e.target.name;
let value = e.target.value;

// console.log(`name ${name}`);
// console.log(`value ${value}`);

setLogData({
  ...logData,
  [name]:value

})
console.log(logData);

}
const handleSubmitData = async (e)=>{
  e.preventDefault();

  let outPut= await fetch(`${BASE_URL}/api/auth/signin`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      },
  
      body:JSON.stringify(logData)

  })

  console.log(outPut);

  if(outPut.ok){
    navigate("/Home")
    localStorage.setItem("email",logData.email)
    
  }
  
}

const onHandleSignUp = ()=>{
  navigate("/Signup")
}


  return (
    <>
      <div className="outer">
        <div className="outerLogo"><img src={logo} alt="" /></div>
        <p className="wlcm">Welcome Back 👋</p>
        <p className="para">
          Today is a new day. It's your day. You shape it. <br />Sign in to start ordering
        </p>
        <form action="" method="POST" onSubmit={handleSubmitData}>
          <div className="emailDiv">
            <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Example@email.com"
              onChange={handleOnChangeData}
              />
            </div>
           <div className="password">
           <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
              onChange={handleOnChangeData}
            />
           </div>
            <button type="submit">Sign in</button>
          </div>
        </form>
        <span>Don't you have an account? <span onClick={onHandleSignUp}>Sign up</span></span>
        
      </div>
    </>
  );
};

export default LoginForm;
