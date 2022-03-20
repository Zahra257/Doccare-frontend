import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashDoctor from '../DashDoctor/DashDoctor';
import Home from '../Home/Home';


const MainRoute = () => {
  return (
    <div>

        <BrowserRouter>

        <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/MainDash" element={<DashDoctor />} />
            
        </Routes>
        
        
        </BrowserRouter>
      


    </div>
  )
}

export default MainRoute