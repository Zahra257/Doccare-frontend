import React, { useEffect, useState } from "react";
import SideBar from "../Theme/sideBar/SideBar";
import TopBar from "../Theme/topBar/TopBar";
import Cardbox from "./Cardbox/Cardbox";
import "./Dash.css";
import Orders from "./Orders/Orders";
import Patients from "./Patients-list/Patients";

import PatienInfo from "./PatientInfo/PatienInfo";
import { getListConsultation } from "../Redux/Reducers/PendingConsultation";
import { useDispatch, useSelector } from "react-redux";

const Dash = () => {

  //State for the style

  const [Classe, setClasse] = useState("")

  const ToggleChange = () => {

    if(Classe === "")
   
    setClasse ('active')

    else setClasse ('')

  }



  //Redux 
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getListConsultation({ id: 16 }));
  }, [Dispatch]);

  const consultations = useSelector((state) => state.DashList.List);

  return (
    <div>
      <div class= "Dashcontainer">
        <SideBar classe = {Classe}/>

        <div class={`Dashmain ${Classe}`}>
          <TopBar  Change = {ToggleChange} />
          <div class="Content">
            <div class="main-content">
              <Cardbox />

              <div class="details">
                <Orders List={consultations} />
                <Patients List={consultations} />
              </div>
            </div>
            <div class="PatientInfo">
              <PatienInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
