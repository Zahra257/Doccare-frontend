import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';


const ForgottenPass = () => {

  const [Classe, SetClasse]= useState('');

  return (
    <div>

<div className = {`container ${Classe}`}>
        <div class="forms-container">
          
              <div className="signin-signup">
                  <form action="" className = "sign-in-form">
                      <h2 class="title">Mot de passe oublié</h2>
                      <div class="input-field" id="sign">
                        <i class="fas fa-user-alt"></i>
                          <input type="text" placeholder="Nom d'utilisateur"/>
                      </div>
                     
                    <input type="submit" value="Login" class="btn solid" onClick = { ()=>
                      
                      SetClasse('sign-up-mode')
                            
                     }/>

                     <p class="social-text">If you have an account <Link to = "/"><a href="#" id="sign-up-btn" >Sign in</a></Link></p>
                     <div class="social-media">
                        
                     </div>
                    </form>

                    <form action="" class="sign-up-form">
                       

                       <p class="social-text">Already have an account <a href="#" id="sign-in-btn" onClick ={

                         ()=> SetClasse('')

                       }>Sign in</a></p>
                       <div class="social-media">
                           
                       </div>
                      </form>

              </div>
          
            <div class="panels-container">
                <div class="panel left-panel">
                    <img src={logo} className="image" alt=""/>
                </div>

                <div class="panel right-panel">
                    <div class="content">

                        <img src={logo} class="image" alt=""/>
                </div>

            </div>
        </div>
    </div>

    

    </div>

    </div>
  )
}

export default ForgottenPass