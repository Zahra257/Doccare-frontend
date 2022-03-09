import React from 'react';

const SideBar = () => {

  return <div>

    <div class="Dashnavigation">
        <ul>
            <li>
                <a href="#">
                    <span class="icon"><img src="logo.png" class="logo"/></span>
                    <span class="title"><img src="text.png" class="text"/></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="people-outline"></ion-icon>
                    </span>
                    <span class="title">Custumers</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="chatbox-ellipses-outline"></ion-icon>
                    </span>
                    <span class="title">Message</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                    <span class="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                    <span class="title">Settings</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                    <span class="Sidetitle">Sign out</span>
                </a>
            </li>
            
        </ul>


    </div> 

  </div>;
};

export default SideBar;
