import React from 'react';
import './Home.css';
import logo from '../../logo.png';
import { Button } from '../Button';

function Home (){

    return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h1>
              potatOH!!! <br></br> 
            </h1>
            <p>
              <br></br>
              - A friendly app that helps you organize your fridge - <br></br>
            </p>
            <br></br>
            <Button> Checkup your fridge now ! </Button>
          </header>
        </div>
      );
}

export default Home;