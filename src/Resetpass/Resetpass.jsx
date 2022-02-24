import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import pass from "../Modals/Pass";
import verifInfo from "../Modals/VerifInfo";
import  Axios from 'axios';

const Resetpass = () => {



  const [info, SetInfo] = useState(new verifInfo());

  useEffect(() => {
    
        let lin = window.location.href.split('/')
        console.log(lin)
        SetInfo({login: lin[4], token : lin[6]})

}, [])

  const [Classe, SetClasse] = useState("");

  const [ErrorMsg, setErrorMsg] = useState("");

  // state for password information

  const [passinfo, setPassinfo] = useState(new pass());

  const Handlechange = (event) =>{

    setPassinfo({ ...passinfo, [event.target.name]: event.target.value });


  }

  const validation = (e) =>{

    e.preventDefault();
 
    //PassWord
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    if (pattern.test(passinfo.password) === false) {
      setErrorMsg("Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial");
    }

    if(passinfo.password !== passinfo.passwordconfirm)
    
    setErrorMsg("Les deux mots de passe doivent être identiques");
   
    if(ErrorMsg === "") { Axios.post(`http://localhost:9000/api/resetpassword/${info.login}/code/${info.token}`, passinfo)
    .then(data => console.log(data))
    .catch(err => setErrorMsg(err?.response?.data?.message))
}

  }

  return (
    <div>
      <div className={`container ${Classe}`}>
        <div class="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form" onSubmit={validation}>
              <h2 class="title">Changer votre mot de passe</h2>

              <div className={ErrorMsg == "" ? "d-none" : "alert alert-danger"}>
              <span style={{color : "rgb(190, 50, 50)"}}>{ErrorMsg}</span>
              </div>

              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onFocus={() => setErrorMsg("")}
                  onChange={Handlechange}
                />
              </div>
              <div class="input-field" id="sign">
                <i class="fas fa-user-alt"></i>
                <input
                  type="password"
                  placeholder="confirmer le mot de passe"
                  name="passwordconfirm"
                  onFocus={() => setErrorMsg("")}
                  onChange={Handlechange}
                />
              </div>
              <input type="submit" value="Submit" class="btn solid" onClick = { ()=>
                      
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
