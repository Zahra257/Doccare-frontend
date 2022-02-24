import React, { useState } from "react";
import "./Signin.css";
import logo from "./logo.png";
import User from "../Modals/Cabinet";
import login from "../Modals/login";
//import Validation from "../Helpers/Validation";
import Axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  // state pour classe CSS
  const [Classe, SetClasse] = useState("");

  // state pour user infos
  const [NewUser, setNewUser] = useState(new User());

  //state for errors
  const [ErrorMsg, setErrorMsg] = useState("");

  // state for login infos

  const [loginInfo, setLogininfo] = useState(new login());

  const HandelInputChange = (event) => {
    setNewUser({ ...NewUser, [event.target.name]: event.target.value });
  };

  const HandelInputChangeLogin = (event) => {
    setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  // data validation
  const validation = (e) => {
    let msg = "";
    e.preventDefault();

    // FirstName
    if (NewUser.nom.length < 4 || NewUser.nom.length > 20) {
      setErrorMsg("le nom doit contenir entre 4 et 20 caractéres");
      msg = "le nom doit contenir entre 4 et 20 caractéres ";
      return
    }

    //LastName
    if (NewUser.prenom.length < 4 || NewUser.prenom.length > 20) {
      setErrorMsg("le prénom doit contenir entre 4 et 20 caractéres");
      msg = "le prénom doit contenir entre 4 et 20 caractéres";
      return
    }

    //LastName
    if (NewUser.login.length < 8) {
      setErrorMsg("login doit contenir plus de 8 caractéres");
      msg = "login doit contenir plus de 8 caractéres";
      return
    }

    //PassWord
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    if (pattern.test(NewUser.password) === false) {
      setErrorMsg(
        "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial"
      );
      msg =
        "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial";
        return
      }

    //Username Email
    let pattern_email =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (pattern_email.test(NewUser.email) === false) {
      setErrorMsg("Email doit être commz suit : Example@Example.com");
      msg = "Email doit être commz suit : Example@Example.com";
      return
    }

    var pattern_tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (pattern_tel.test(NewUser.tel) === false) {
      setErrorMsg("Vous devez entrer un numero de téléphone valide");
      msg = "Vous devez entrer un numero de téléphone valide";
      return
    }

    if (msg == "") {
      Axios.post("http://localhost:9000/api/auth/register", NewUser)
        .then((response) => setErrorMsg(response.data.message))
        .catch((err) => setErrorMsg(err?.response?.data?.message));
    }
  };

  const loginvalidation = (e) => {
    let msg = "";

    e.preventDefault();

     //LastName
     if (loginInfo.log.length < 8) {
      setErrorMsg("login doit contenir plus de 8 caractéres");
      msg = "login doit contenir plus de 8 caractéres";
      return
    }

    //PassWord
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    if (pattern.test(loginInfo.password) === false) {
      setErrorMsg(
        "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial"
      );
      msg =
        "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial";
        return
      }

   

    if (msg === "") {
      Axios.post(
        `http://localhost:9000/api/Signin/${loginInfo.log}/pass/${loginInfo.password}`,
        loginInfo
      )
        .then((response) => setErrorMsg(response.data.message))
        .catch((err) => setErrorMsg(err?.response?.data?.message));
    }
  };

  return (
    <div>
      <div className={`container ${Classe}`}>
        <div class="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form" onSubmit={loginvalidation}>
              <h2 class="title">Se connecter</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
                <span style={{color : "rgb(190, 50, 50)"}}>{ErrorMsg}</span>
              </div>

              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  name="log"
                  onFocus={() => setErrorMsg("")}
                  onChange={HandelInputChangeLogin}
                />
              </div>
              <div class="input-field" id="sign">
                <i class="fas fa-key"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
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
              <span style={{color : "rgb(190, 50, 50)"}}>{ErrorMsg}</span>
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
