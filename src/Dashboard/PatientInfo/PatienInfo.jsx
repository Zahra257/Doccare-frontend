import React from "react";
import user from "./user.jpg";

const PatienInfo = ({List}) => {
  return (
    <div>
        
        <div class="imgBx">
          <img src= {user} />
        </div>
        <span class="Name">
          <h4>Imane Guennach</h4>
          <h5>Femme</h5>
        </span>
        <div class="maininfos">
          <div class="infoslabel">
            <label>Adress</label>
            <p>rue Sabra ex Goya quartier Palmiers</p>
          </div>
          <div class="infoslabel">
            <label>Date de naissance</label>
            <p>12-05-2000</p>
          </div>
          <div class="infoslabel">
            <label>Tel</label>
            <p>056-34-34-34</p>
          </div>
          <div class="infoslabel">
            <label>CIN</label>
            <p>WA235666</p>
          </div>
          <div class="infoslabel">
            <label>E-mail</label>
            <p>guennach.imane@gmail.com</p>
          </div>
          <div class="infoslabel">
            <label>Situation familiale</label>
            <p>Celibataire</p>
          </div>
          <div class="infoslabel">
            <label>Mutuelle</label>
            <p>Saham</p>
          </div>
          <input type="button" value="Voir plus" class="bttn solid"></input>
        </div>
    
    </div>
  );
};

export default PatienInfo;