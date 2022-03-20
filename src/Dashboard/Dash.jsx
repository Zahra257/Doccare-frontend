import React, { useEffect, useState } from "react";
import Cardbox from "./Cardbox/Cardbox";
import Orders from "./Orders/Orders";
import Patients from "./Patients-list/Patients";
import PatienInfo from "./PatientInfo/PatienInfo";
import { getListConsultation } from "../Redux/Reducers/PendingConsultation";
import { useDispatch, useSelector } from "react-redux";

const Dash = () => {
  
  //Redux
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getListConsultation({ id: 16 }));
  }, [Dispatch]);

  const consultations = useSelector((state) => state.DashList.List);

  return (
    <div>
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
  );
};

export default Dash;
