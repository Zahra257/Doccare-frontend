import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ForgottenPass from '../ForgottenPass/ForgottenPass'
import Resetpass from '../Resetpass/Resetpass'
import SignIn from '../Signin/Signin'

const AppRoutes = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route path ="/" element={<SignIn/>}/>
      <Route path ="/ForgottenPassword" element={<ForgottenPass/>}/>
      <Route path ="/Resetpassword/:login/code/:token" element={<Resetpass/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoutes