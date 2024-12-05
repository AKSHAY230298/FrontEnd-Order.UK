import React from 'react'
import SignUpForm from '../components/SignUpForm.jsx'
import Footer from '../components/Footer.jsx'
// import "../pages/SignUp.css"

const SignUp = () => {
  return (
    <>
    <div className="container">
      <div className="body">
          <div className="loginInfo">
            <SignUpForm/>
          </div>
          <div className="bgrImg">
            <img src="BurgerImg.png" alt="" />
          </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default SignUp
