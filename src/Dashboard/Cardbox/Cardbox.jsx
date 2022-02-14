import React from 'react';

const Cardbox = () => {
  return <div>

<div class="cardBox">
         <div class="cards">

            <div class="iconBox">   
                <ion-icon name="eye"></ion-icon>
             </div>
             
             <div>
                 <div class="numbers">1,504</div>
                 <div class="cardName">Daily Views</div>
             </div>
            
         </div>
     

    
        <div class="cards">

            <div class="iconBox">   
                <ion-icon name="cart"></ion-icon>
            </div>

            <div>
                <div class="numbers">80</div>
                <div class="cardName">Sales</div>
            </div>
            
        </div>
 

   
        <div class="cards">
            <div class="iconBox">   
                <ion-icon name="chatbubbles"></ion-icon>
            </div>
            
            <div>
                <div class="numbers">284</div>
                <div class="cardName">Comments</div>
            </div>
            
        </div>
  

   
        <div class="cards">

            <div class="iconBox">   
                <ion-icon name="cash"></ion-icon>
            </div>

            <div>
                <div class="numbers">$7,842</div>
                <div class="cardName">Earning</div>
            </div>
            
        </div>

    </div>
    
  </div>;
};

export default Cardbox;
