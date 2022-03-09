import React, { useState, useRef, useEffect } from "react";
import "./Signin.css";
import logo from "./logo.png";
import User from "../Modals/Cabinet";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Login, clearErrorMsg } from "../Redux/Reducers/auth";
import loginCredentials from "../Modals/login";
import { Uservalidation, loginvalidation } from "../Helpers/Validation";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  // state pour classe CSS
  const [Classe, SetClasse] = useState("");

  // input variables

  const username = useRef();
  const Psw = useRef();

  // state pour user infos
  const [NewUser, setNewUser] = useState(new User());

  //state for errors
  const [ErrorMsg, setErrorMsg] = useState("");

  // state for login infos

  const [loginInfo, setLogininfo] = useState(new loginCredentials());

  // Dispatch valiable

  const dispatch = useDispatch();

  //redux state
  //const errorServer = useSelector((s) => s.auth.Erreur);
  const isloading = useSelector((s) => s.auth.isLoading);
  const userInfo = useSelector((s) => s.auth.userInfo);

  // data validation5
  const SigninLogic = (e) => {
    e.preventDefault();

    let msg = loginvalidation(username.current.value, Psw.current.value);

    setErrorMsg(msg);

    if (msg === "") {
      dispatch(Login(username.current.value, Psw.current.value));
      username.current.value = "";
      Psw.current.value = "";
    }
  };

  const SignupLogic = (e) => {
    e.preventDefault();

    if (msg === "");
  };

  useEffect(()=>{

    if(errorServer !== ""){

      //setErrorMsg(errorServer)

      call(clearErrorMsg());

    }

  }, [errorServer])

  return (
    <div>
      <div className={`container ${Classe}`}>
        <div class="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form" onSubmit={loginvalidation}>
              <h2 class="title">Se connecter</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
                <span style={{ color: "rgb(190, 50, 50)" }}>{ErrorMsg}</span>
              </div>

              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  ref={username}
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChangeLogin}
                />
              </div>
              <div class="input-field" id="sign">
                <i class="fas fa-key"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  ref={Psw}
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChangeLogin}
                />
              </div>
              <Link to="/ForgottenPassword">
                <p class="social-text forget" id="sign-in-btn">
                  Mot de passe oublié
                </p>
              </Link>
              <input type="submit" value="Se connecter" class="btn solid" />
              <p class="social-text">
                Vous n'avez pas de compte{" "}
                <a
                  href="#"
                  id="sign-up-btn"
                  onClick={() => {
                    SetClasse("sign-up-mode");
                  }}
                >
                  inscrivez-vous
                </a>
              </p>
              <div class="social-media"></div>
            </form>

            <form action="" class="sign-up-form" onSubmit={validation}>
              <h2 class="title">S'inscrire</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
                <span style={{ color: "rgb(190, 50, 50)" }}>{ErrorMsg}</span>
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Nom"
                  name="nom"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Prénom"
                  name="prenom"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-envelope"></i>
                <input
                  type="text"
                  placeholder="Spécialité"
                  name="specialite"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="CIN"
                  name="CIN"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Adresse"
                  name="adresse"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-envelope"></i>
                <input
                  type="text"
                  placeholder="Tel du cabinet"
                  name="Tel"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="email"
                  placeholder="Email du cabinet"
                  name="email"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Login"
                  name="login"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChange}
                />
              </div>

              <input type="Submit" value="S'inscrire" class="btn solid" />

              <p class="social-text">
                Vous avez déja un compte{" "}
                <a
                  href="#"
                  id="sign-in-btn"
                  onClick={() => {
                    SetClasse("");
                  }}
                >
                  Se connecter
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

export default SignIn;
