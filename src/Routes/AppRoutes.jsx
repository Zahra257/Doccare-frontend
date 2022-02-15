import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ForgottenPass from '../ForgottenPass/ForgottenPass'
import SignIn from '../Signin/Signin'

const AppRoutes = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      
    <Route path ="/" element={<SignIn/>}/>
      <Route path ="/ForgottenPassword" element={<ForgottenPass/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoutes