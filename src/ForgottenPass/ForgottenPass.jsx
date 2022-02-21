import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./ForgottenPass.css";
import  Axios from 'axios'

const ForgottenPass = () => {
  const [Classe, SetClasse] = useState("");

  //state for errors
  const [ErrorMsg, setErrorMsg] = useState("");

  // State for login
  const [Login, setLogin] = useState();

  const validation = (e) => {
    
    e.preventDefault();
     let msg = ""
    //Login
    if (Login.length < 8) {
      setErrorMsg("<h1>login should be more than 8 caracter</h1>");
      msg = "<h1>login should be more than 8 caracter</h1>"
      SetClasse("")
    }


    if (msg === "") {
      Axios.post(`http://localhost:9000/api/fogot_password/${Login}`, Login)
        .then((response) => {
          setErrorMsg(response.data.message)
          if(response.data.message) SetClasse("")
        }
        )
        .catch((err) => console.log(err));
    }
    
   
  
  };

  return (
    <div>
      <div className={`pass-container ${Classe}`}>
        <div class="pass-forms-container">
          <div className="pass-signin-signup">
            <form action="" className="pass-sign-in-form" onSubmit={validation}>
              <h2 class="pass-title">Mot de passe oublié</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
                {ErrorMsg}
              </div>

              <div class="pass-input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="text" 
                  placeholder="Nom d'utilisateur"
                  onFocus={()=>setErrorMsg("")}
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                />
              </div>

              <input
                type="submit"
                value="Login"
                class="btn solid"
                onClick={() =>{
                  
                  SetClasse("pass-sign-up-mode")}
                }
              />

              <p class="pass-social-text">
                If you have an account{" "}
                <Link to="/">
                  <a href="#" id="sign-up-btn">
                    Sign in
                  </a>
                </Link>
              </p>
              <div class="pass-social-media"></div>
            </form>

            <form action="" class="pass-sign-up-form">
              <i class="fas fa-check-circle fa-5x"></i>

              <p class="response">
                {" "}
                Nous vous avons envoyé un mail sur votre boite, merci de le
                verifier. <br />
                <br /> Cliquer ici pour revenir à{" "}
                <a href="#" id="sign-in-btn" >
                  la page d'acceuil
                </a>
              </p>
              <div class="pass-social-media"></div>
            </form>
          </div>

          <div class="pass-panels-container">
            <div class="pass-panel pass-left-panel">
              <img src={logo} className="pass-image" alt="" />
            </div>

            <div class="pass-panel pass-right-panel">
              <div class="pass-content">
                <img src={logo} class="pass-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPass;
