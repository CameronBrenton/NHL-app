import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Splash(){
  return(
    <main className="splashPageContent">
      <nav  id="Splash">
        
        <p>Welcome to our Unoffical NHL app!</p>
        <Link to="/Home">
          <img className="logo" src="https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem.jpg" alt="NHL_LOGO"></img>
        </Link>
        <p className="ClickHere!">Click the logo to get started!</p>

      </nav>
    </main>
  );
}

export default Splash;