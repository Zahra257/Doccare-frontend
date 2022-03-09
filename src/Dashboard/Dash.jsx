import React from 'react';
import SideBar from '../Theme/sideBar/SideBar';
import TopBar from '../Theme/topBar/TopBar';
import Cardbox from './Cardbox/Cardbox';
import './Dash.css'
import Orders from './Orders/Orders';
import Patients from './Patients-list/Patients';

const Dash = () => {

  return(

  <div>

   <div class="Dashcontainer">
     
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

export default Dash;
