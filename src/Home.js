import React from 'react';
import './App.css';


function Home() {
  
  return (
    <main className="mainPageContent">

      <div id="Videos">
        <div id="Saves">
          <h1>Saves of the week</h1>
          <iframe width="420" height="310"
          src="https://www.nhl.com/video/top-10-saves-of-the-week/t-283359680/c-7923204?autostart=false">
          </iframe>
        </div>
        <div id="Plays">
          <h1> Plays of the Week</h1>
          <iframe width="420" height="310"
          src="https://www.nhl.com/video/top-plays-of-the-week--march-28/t-277350912/c-7933755?q=Plays+of+the+week?autostart=false">
          </iframe>
        </div>
          <div id="News">
            <h1> News </h1>
            <iframe width="420" height="310"
            src="https://www.nhl.com/video/what-gender-equality-means-to-us/t-277350912/c-7909070?autostart=false">
            </iframe>
        </div>
      </div>
    </main>
  
  );
};

export default Home;