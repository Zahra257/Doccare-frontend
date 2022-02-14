import React from 'react';

const TopBar = () => {
  return <div>

<div class="topbar">
        <div class="toggle">
            <ion-icon name="menu"></ion-icon>
        </div>
       
        <div class="search">
            <label>
                <input type="text" placeholder="Search here"/>
                <ion-icon name="search"></ion-icon>
            </label>
        </div>
       
        <div class="user">
            <img src="/user.jpg"/>
        </div>
    </div>
    
  </div>;
};

export default TopBar;
