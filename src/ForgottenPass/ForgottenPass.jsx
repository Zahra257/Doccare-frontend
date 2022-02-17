import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './ForgottenPass.css'




const ForgottenPass = () => {

  const [Classe, SetClasse]= useState('');

  return (
    <div>

<div className = {`pass-container ${Classe}`}>
        <div class="pass-forms-container">
          
              <div className="pass-signin-signup">
                  <form action="" className = "pass-sign-in-form">
                      <h2 class="pass-title">Mot de passe oublié</h2>
                      <div class="pass-input-field" id="sign">
                        <i class="fas fa-user-alt"></i>
                          <input type="text" placeholder="Nom d'utilisateur"/>
                      </div>
                     
                    <input  type="button" value="Login" class="btn solid" onClick = { ()=>
                      
                      SetClasse("pass-sign-up-mode")
                            
                     }/>

                     <p class="pass-social-text">If you have an account <Link to = "/"><a href="#" id="sign-up-btn" >Sign in</a></Link></p>
                     <div class="pass-social-media">
                        
                     </div>
                    </form>

                    <form action="" class="pass-sign-up-form">

                    <i class="fas fa-check-circle fa-5x"></i>
                   

                       <p class="response"> Nous vous avons envoyé un mail sur votre boite, merci de le verifier. <br/><br/> Cliquer ici pour revenir à <a href="#" id="sign-in-btn" onClick ={

                         ()=> SetClasse('')

                       }>la page d'acceuil</a></p>
                       <div class="pass-social-media">
                           
                       </div>
                      </form>

              </div>
          
            <div class="pass-panels-container">
                <div class="pass-panel pass-left-panel">
                    <img src={logo} className="pass-image" alt=""/>
                </div>

                <div class="pass-panel pass-right-panel">
                    <div class="pass-content">

                        <img src={logo} class="pass-image" alt=""/>
                </div>

            </div>
        </div>
    </div>

    

    </div>

    </div>
  )
}

export default ForgottenPass