import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ForgottenPass from '../ForgottenPass/ForgottenPass'
import Resetpass from '../Resetpass/Resetpass'
import SignIn from '../Signin/Signin'
import Dash from '../Dashboard/Dash'
import Home from '../Home/Home'

const AppRoutes = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Signin" element={<SignIn/>}/>
      <Route path ="/ForgottenPassword" element={<ForgottenPass/>}/>
      <Route path ="/Resetpassword/:login/code/:token" element={<Resetpass/>}/>
      <Route path ="/DoctorDash" element={<Dash/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoutes