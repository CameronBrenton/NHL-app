import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Nav() {
  let location = useLocation();

  if(location.pathname === "/"){
    return null;
  }else{
    return (
      <nav className="Navbar">
        <ul className="NHLlist">
          <Link to="/Home">
            <li>Home</li>
          </Link>
          <Link to="/Standings">
            <li>Standings</li>
          </Link>
          <img className="LogoNHL" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/1200px-05_NHL_Shield.svg.png"></img>
          <Link to="/UpcomingGames">
            <li>Upcoming Games</li>
          </Link>
          <Link to="/Stats">
            <li>Stats</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;