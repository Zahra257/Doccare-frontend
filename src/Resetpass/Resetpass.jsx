import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Resetpass = () => {
  const [Classe, SetClasse] = useState("");

  const [ErrorMsg, setErrorMsg] = useState("");

  return (
    <div>
      <div className={`container ${Classe}`}>
        <div class="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 class="title">Changer votre mot de passe</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
                {ErrorMsg}
              </div>

              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="Password"
                  onFocus={() => setErrorMsg("")}
                />
              </div>
              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="passwor"
                  placeholder="confirmer le mot de passe"
                  name="Passwordconfirm"
                  onFocus={() => setErrorMsg("")}
                />
              </div>
              <input type="button" value="Submit" class="btn solid" onClick = { ()=>
                      
                      SetClasse("sign-up-mode") }/>
              <p class="social-text">
                Retour à{" "}
                <a
                  href="#"
                  id="sign-up-btn"
                 
                >
                  la page d'acceuil
                </a>
              </p>
              <div class="social-media"></div>
            </form>

            <form action="" class="sign-up-form">
              <i class="fas fa-check-circle fa-5x"></i>
              <p class="response">
                {" "}
                Votre mot de passe a été changer avec succés. <br />
                <br /> Cliquer ici pour{" "}
                <Link to = "/"><a href="#" id="sign-in-btn">
                  vous connecter
                </a></Link>
              </p>

              <p class="response">
                Ou revenir à {" "}
                <a href="#" id="sign-in-btn" >
                la page d'acceuil
                </a>
              </p>
              <div class="social-media"></div>
            </form>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <img src={logo} className="image" alt="" />
            </div>

            <div class="panel right-panel">
              <div class="content">
                <img src={logo} class="image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
