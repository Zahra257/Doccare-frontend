import React, {useState} from 'react';
import './Signin.css';
import logo from './logo.png';






const SignIn = () => {

  const [Classe, SetClasse]= useState('');


  

  return ( <div>


       <div className = {`container ${Classe}`}>
        <div class="forms-container">
          
              <div className="signin-signup">
                  <form action="" className = "sign-in-form">
                      <h2 class="title">Sign in</h2>
                      <div class="input-field" id="sign">
                        <i class="fas fa-user-alt"></i>
                          <input type="text" placeholder="Username"/>
                      </div>
                      <div class="input-field" id="sign">
                        <i class="fas fa-key"></i>
                        <input type="passworf" placeholder="Password"/>
                    </div>
                    <p class="social-text forget"><a href="#" id="sign-in-btn" onClick={
                        ()=>{

                            
                        }
                    }>Mot de passe oublié</a></p>
                    <input type="submit" value="Login" class="btn solid"/>
                     <p class="social-text">If you don't have an account <a href="#" id="sign-up-btn" onClick = { ()=>
                      
                      SetClasse('sign-up-mode')
                            
                     }>Sign up</a></p>
                     <div class="social-media">
                        
                     </div>
                    </form>

                    <form action="" class="sign-up-form">
                        <h2 class="title">Sign up</h2>

                        <div class="input-field">
                            <i class="fas fas-user"></i>
                            <input type="text" placeholder="Nom et prénom"/>
                        </div>

                        <div class="input-field">
                            <i class="fas fas-envelope"></i>
                            <input type="text" placeholder="Spécialité"/>
                        </div>

                        <div class="input-field">
                          <i class="fas fas-user"></i>
                          <input type="passworf" placeholder="CIN"/>
                      </div>

                      <div class="input-field">
                            <i class="fas fas-user"></i>
                            <input type="text" placeholder="Adresse"/>
                        </div>

                        <div class="input-field">
                            <i class="fas fas-envelope"></i>
                            <input type="text" placeholder="Tel du cabinet"/>
                        </div>

                        <div class="input-field">
                          <i class="fas fas-user"></i>
                          <input type="email" placeholder="Email du cabinet"/>
                      </div>

                      <div class="input-field">
                          <i class="fas fas-user"></i>
                          <input type="text" placeholder="Login"/>
                      </div>

                      <div class="input-field">
                          <i class="fas fas-user"></i>
                          <input type="passworf" placeholder="Mot de passe"/>
                      </div>

                      
                      
                      <input type="submit" value="Sign up" class="btn solid"/>

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

};

export default SignIn
