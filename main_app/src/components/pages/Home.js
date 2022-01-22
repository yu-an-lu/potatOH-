import React from 'react';
import './Home.css';
import logo from '../../logo.png';

function Home (){
    return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
              POTATOH!!! <br></br>
              <br></br>
              - A friendly app that helps you organize your fridge - <br></br>
    
            </p>
          </header>
        </div>
      );
}

export default Home;