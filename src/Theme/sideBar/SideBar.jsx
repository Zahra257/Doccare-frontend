import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import text from "./text.png";

const SideBar = ({ classe }) => {
  return (
    <div>
      <div class={`Dashnavigation ${classe}`}>
        <ul>
          <li>
            <a href="#">
              <span class="icon">
                <img src={logo} class="Dashlogo" />
              </span>
              <span class="Sidetitle">
                <img src={text} class="Dashtext" />
              </span>
            </a>
          </li>
          <li>
            <Link to="/">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>

              <span class="Sidetitle">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/PatientsList">
              <span class="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Patients</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="help-circle-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Consultations</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Assistantes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Message</span>
            </a>
          </li>
          
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span class="Sidetitle">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
