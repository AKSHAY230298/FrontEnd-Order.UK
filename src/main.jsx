import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import LoginForm from './components/LoginForm.jsx'
import SignUp from './pages/SignUp.jsx'
import HomePg from './pages/HomePg.jsx'
import Product from './pages/Product.jsx'
import Payment from './pages/Payment.jsx'
import Profile from './pages/Profile.jsx'

import Order from './pages/Order.jsx'
import Addresses from './pages/Addresses.jsx'
import Add_Address from './components/Add_Address.jsx'
// import Addresses from './components/Addresses.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />                
          <Route path='/signUp' element={<SignUp/>} />  
          <Route path ="/home" element = {<HomePg/>}/>  
          <Route path ="/product" element = {<Product/>}/>  
          <Route path ="/payment" element = {<Payment/>}/>  
          <Route path ="/order" element = {<Order/>}/>  
          <Route path ="/address" element = {<Addresses/>}/>  
          <Route path ="/profile" element = {<Profile/>}/>  ``
           




        </Routes>
    </BrowserRouter>
  </StrictMode>
)
