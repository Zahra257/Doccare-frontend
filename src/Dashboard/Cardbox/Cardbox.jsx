import React, {useState, useEffect} from 'react';
import axios from "axios"

const Cardbox = () => {

    // Patient State
    const [NbrPatient, setNbrPatient] = useState();

    // Nombre de consultation

    const [NbrConsul, setNbrConsul] = useState();

     // Nombre de consultation

     const [NbrAvis, setNbrAvis] = useState();

       // Montant du revenu

       const [NbrRevenu, setRevenu] = useState();

    useEffect(() => {

        axios.get("http://localhost:9000/api/Doctor/NombredePatient/id/16")
        .then((response) => setNbrPatient(response.data.NbrPatient))
        .catch(err => console.log(err))

        axios.get("http://localhost:9000/api/Doctor/NombreConsultation/id/16")
        .then((response) => setNbrConsul(response.data.NbrConsultation))
        .catch(err => console.log(err))

        axios.get("http://localhost:9000/api/Doctor/NombredAvis/id/16")
        .then((response) => setNbrAvis(response.data.NbrAvis))
        .catch(err => console.log(err))

        axios.get("http://localhost:9000/api/Doctor/TotalConsultation/id/16")
        .then((response) => {

            if(response.data.TotalConsultation === null) setRevenu(0)
            
            else setRevenu(response.data.TotalConsultation)
        })
        .catch(err => console.log(err))


    }, [])


  return <div>

<div class="cardBox">
         <div class="cards">

            <div class="iconBox">   
                <ion-icon name="eye"></ion-icon>
             </div>
             
             <div>
                 <div class="numbers">{NbrPatient}</div>
                 <div class="cardName">Patients</div>
             </div>
            
         </div>
     

    
        <div class="cards">

            <div class="iconBox">   
                <ion-icon name="cart"></ion-icon>
            </div>

            <div>
                <div class="numbers">{NbrConsul}</div>
                <div class="cardName">Consultations</div>
            </div>
            
        </div>
 

   
        <div class="cards">
            <div class="iconBox">   
                <ion-icon name="chatbubbles"></ion-icon>
            </div>
            
            <div>
                <div class="numbers">{NbrAvis}</div>
                <div class="cardName">Avis</div>
            </div>
            
        </div>
  

   
        <div class="cards">

            <div class="iconBox">   
                <ion-icon name="cash"></ion-icon>
            </div>

            <div>
                <div class="numbers">{NbrRevenu}</div>
                <div class="cardName">Revenu</div>
            </div>
            
        </div>

    </div>
    
  </div>;
};

export default Cardbox;
