import React, { useState } from "react";
import SideBar from "../Theme/sideBar/SideBar";
import TopBar from "../Theme/topBar/TopBar";
import "./Dash.css";

const DashDoctor = (props) => {
  //State for the style

  const [Classe, setClasse] = useState("");

  const ToggleChange = () => {
    if (Classe === "") setClasse("active");
    else setClasse("");
  };

  return (
    <div>
      <div class="Dashcontainer">
        <SideBar classe={Classe} />

        <div class={`Dashmain ${Classe}`}>
          <TopBar Change={ToggleChange} />
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashDoctor;
