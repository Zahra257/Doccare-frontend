import React, { useState } from "react";
import "./Signin.css";
import logo from "./logo.png";
import User from "../Modals/Cabinet";
import login from "../Modals/login";
//import Validation from "../Helpers/Validation";
import  Axios from 'axios'
import { Link } from "react-router-dom";

const SignIn = () => {
  // state pour classe CSS
  const [Classe, SetClasse] = useState("");

  // state pour user infos
  const [NewUser, setNewUser] = useState(new User());

  //state for erreurs
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
    e.preventDefault();

    // FirstName
    if (NewUser.nom.length < 4 || NewUser.nom.length > 20) {
      return "<h1>firstname should contain from 4 to 20 caracters</h1>";
    }

    //LastName
    if (NewUser.prenom.length < 4 || NewUser.prenom.length > 20) {
      return "<h1>lastname should contain from 4 to 20 caracters</h1>";
    }

    //LastName
    if (NewUser.login.length < 8) {
      return "<h1>login should be more than 8 caracter</h1>";
    }

    //PassWord
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    if (pattern.test(NewUser.password) === false) {
      return "<h1>The password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</h1>";
    }

    //Username Email
    let pattern_email =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (pattern_email.test(NewUser.email) === false) {
      return "<h1>Email Should be like : Example@Example.com</h1>";
    }

    var pattern_tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (pattern_tel.test(NewUser.tel) === false) {
      return "<h1>You should enter a valide phone format</h1>";
    }
  };

  const loginvalidation = (e) => {

     e.preventDefault();

     //PassWord
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    if (pattern.test(loginInfo.password) === false) {
      return "<h1>The password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</h1>";
    }

     //LastName
     if (loginInfo.log.length < 8) {
      return "<h1>login should be more than 8 caracter</h1>";
    }

    if(ErrorMsg === "") { Axios.post(`http://localhost:9000/api/Signin/${loginInfo.log}/pass/${loginInfo.password}`, loginInfo)
          .then(data => console.log(data))
          .catch(err => console.log(err))
    }

  }


  return (
    <div>
      <div className={`container ${Classe}`}>
        <div class="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form" onSubmit={loginvalidation}>
              <h2 class="title">Sign in</h2>
              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="Username" name ='log' onChange={HandelInputChangeLogin}/>
              </div>
              <div class="input-field" id="sign">
                <i class="fas fa-key"></i>
                <input type="passworf" placeholder="Password" name="password" onChange={HandelInputChangeLogin}/>
              </div>
              <Link to ="/ForgottenPassword"><p class="social-text forget" id="sign-in-btn">
                
                  Mot de passe oublié
                
              </p></Link>
              <input type="submit" value="Login" class="btn solid" />
              <p class="social-text">
                If you don't have an account{" "}
                <a
                  href="#"
                  id="sign-up-btn"
                  onClick={() => SetClasse("sign-up-mode")}
                >
                  Sign up
                </a>
              </p>
              <div class="social-media"></div>
            </form>

            <form action="" class="sign-up-form" onSubmit={validation}>
              <h2 class="title">Sign up</h2>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Nom"
                  name="nom"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Prénom"
                  name="prenom"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-envelope"></i>
                <input
                  type="text"
                  placeholder="Spécialité"
                  name="specialite"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="CIN"
                  name="CIN"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Adresse"
                  name="adresse"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-envelope"></i>
                <input
                  type="text"
                  placeholder="Tel du cabinet"
                  name="Tel"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="email"
                  placeholder="Email du cabinet"
                  name="email"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="text"
                  placeholder="Login"
                  name="login"
                  onChange={HandelInputChange}
                />
              </div>

              <div class="input-field">
                <i class="fas fas-user"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onChange={HandelInputChange}
                />
              </div>

              <input
                type="submit"
                value="Sign up"
                class="btn solid"
                onClick={() => {
                  if (ErrorMsg == "") {
                    Axios.post(
                      "http://localhost:9000/api/auth/register",
                      NewUser
                    )
                      .then((data) => console.log(data))
                      .catch((err) =>
                        setErrorMsg(err?.response?.data?.message)
                      );
                  }
                }}
              />

              <p class="social-text">
                Already have an account{" "}
                <a href="#" id="sign-in-btn" onClick={() => SetClasse("")}>
                  Sign in
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
