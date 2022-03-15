import React from 'react';
import SideBar from '../Theme/sideBar/SideBar';
import TopBar from '../Theme/topBar/TopBar';
import Cardbox from './Cardbox/Cardbox';
import './DashAssistante.css'
import Orders from './Orders/Orders';
import Patients from './Patients-list/Patients';

const DashAssistante = () => {

  return(

  <div>

   <div class="Asscontainer">
     
     <SideBar/>

  
    <div class="Dashmain">
    <TopBar/>
    
    <div class="main-content">
    
    <Cardbox/>

    

    <div class="details">
      
        <Orders/>
        <Patients/>

    </div>


</div>

    </div>

</div> 

  </div>
  )
};

export default DashAssistante;
