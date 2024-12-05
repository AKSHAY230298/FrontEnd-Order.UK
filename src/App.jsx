import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'


function App() {

  const navigate = useNavigate();
  function handleLogin(){
    navigate('/Home')
  }

  return (
    <>
    <div className="container">
      <div className="body">
          <div className="loginInfo">
            <LoginForm/>
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

export default App
