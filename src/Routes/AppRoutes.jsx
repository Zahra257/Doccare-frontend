import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgottenPass from "../ForgottenPass/ForgottenPass";
import Resetpass from "../Resetpass/Resetpass";
import SignIn from "../Signin/Signin";
import Home from "../Home/Home";
import DashAssistante from "../Dashboard - Assistante/DashAssistante";
import PatientsList from "../Patients/PatientsList";
import DashDoctor from "../DashDoctor/DashDoctor";
import Dash from "../Dashboard/Dash";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DashDoctor>
        <Routes>
        <Route path="/" element={<Dash />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/ForgottenPassword" element={<ForgottenPass />} />
          <Route
            path="/Resetpassword/:login/code/:token"
            element={<Resetpass />}
          />
          
          <Route path="/DashAssistante" element={<DashAssistante />} />
          <Route path="/PatientsList" element={<PatientsList />} />
        </Routes>
      </DashDoctor>
    </BrowserRouter>
  );
};

export default AppRoutes;
