import React from 'react';
import './Fridge.css';
import './Home.css';
import logo from '../../logo.png';

// Random template to check if button is working

function Fridge (){

    return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
              POTATOH!!! <br></br>
              <br></br>
              - A friendly app that helps you organize your fridge - <br></br>
            </p>
            <br></br>
          </header>
        </div>
      );
}

export default Fridge;
