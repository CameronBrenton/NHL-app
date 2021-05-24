import React from 'react';
import './App.css';

const data = {
  "Tuesday March 30th" : [
    "Columbus Blue Jackets at Tampa Bay Lightning(8:30 p.m.)",
    "New Jersey Devils at Boston Bruins(8:30 p.m.)",
    "Detroit Red Wings at Flordia Panthers(8:30 p.m)",
    "Washington Capitals at New York Rangers(8:30 p.m.)",
    "Edmonton Oilers at Montreal Canadians(8:30 p.m.)",
    "Carolina Hurricanes at Chicago Blackhawks(9:00 p.m.)",
    "Dallas Stars at Nashville Predators(9:30 p.m.)",
  ],
  "Wednesday March 31st" : [
    "Philidelphia Flyers at Buffalo Sabres(9:00 p.m.)",
    "Toronto Maple Leafs at Winnipeg Jets(9:00 p.m.)",
    "Arizona Coyotes at Colorado Avalanche(11:00 p.m.)",
    "Los Angeles Kings at Vegas Golden Knights(11:30 p.m.)",
  ],
  "Thursday April 1st" : [
    "Calgary Flames at Vancouver Canucks(12:00 a.m.)",
    "Minnasota Wild at San Jose Sharks(12:00 a.m.)",
    "Washington Capitals at New York Islanders(8:30 p.m.)",
    "Columbus Blue Jackets at Tampa Bay Lightning(8:30 p.m.)",
    "Pittsbrugh Penguins at Boston Bruins(8:30 p.m.)", 
    "Montreal Canadians at Ottawa Senators(8:30 p.m.)",  
    "New York Rangers at Buffalo Sabres(8:30 p.m.)",
    "Detroit Red Wings at Florida Panthers(8:30 p.m.)",
    "Dallas Stars at Nashville Predators(9:30 p.m.)", 
    "Carolina Hurricanes at Chicago Blackhawks(9:30 p.m.)",
  ],
  "Friday April 2nd" : [
    "Minnasota Wild at Vegas Golden Knights(12:00 a.m.)",
    "Washington Capitals at New Jersey Devils(8:30 p.m.)",
    "Toronto Maple Leafs at Winnipeg Jets(9:30 p.m.)",
    "Calgary Flames at Edmonton Oilers(10:30 p.m.)",
    "St Louis Blues at Columbus Blue Jackets(10:30 p.m.)",
    "San Jose Sharks at Los Angeles Kings(11:30 p.m.)",
    "Arizona Coyotes at Anaheim Ducks(11:30 p.m.)",
  ],
  "Saturday April 3rd" : [
    "Detroit Red Wings at Tampa Bay Lightning(2:30 p.m.)", 
    "Pittsburgh Penguins at Boston Bruins(2:30 p.m.)",
    "Chicago Blackhawks at Nashville Predators(4:30 p.m.)", 
    "New York Rangers at Buffalo Sabres(8:30 p.m.)", 
    "Ottawa Senators at Montreal Canadians(8:30 p.m.)", 
    "Dallas Stars at Carolina Hurricanes(8:30 p.m.)", 
    "Philidelphia Flyers at New York Islanders(8:30 p.m.)", 
    "Columbus Blue Jackets at Florida Panthers(8:30 p.m.)", 
    "St Louis Blues at Colorado Avalanche(10:30 p.m.)", 
    "Minnasota Wild at Vegas Golden Knights(10:30 p.m.)",
    "Vancouver Canucks at Edmonton Oilers(11:30 p.m.)",
    "San Jose Sharks at Los Angeles Kings(11:30 p.m.)",
  ],
  "Sunday April 4th" : [
    "Detroit Red Wings at Tampa Bay Lightning(1:30 p.m.)",
    "Washington Capitals at New Jersey Devils(4:30 p.m.)",
    "Columbus Blue Jackets at Florida Panthers(6:30 p.m.)",
    "Dallas Stars at Carolina Hurricane(8:30 p.m.)",
    "Arizona Coyotes at Anaheim Ducks(10:30 p.m.)",
    "Vancouver Canucks at Winnipeg Jets(10:30 p.m.)",
    "Toronto Maple Leafs at Calgary Flames(10:30 p.m.)"
  ]
};
          

function UpcomingGames(){
  let entriesHtml = [];
  for(let k of Object.keys(data)){
    let values = data[k]
    entriesHtml.push(<p>{k}</p>)
    for(let v of values){
      entriesHtml.push(<tr>{v}</tr>);
    }
  }

  return <main className="mainPageContent">
    <table className="UpcomingGamesTable">
      <tr>
        <th>Upcoming Games</th>
      </tr>
      {entriesHtml}
    </table>
  </main>
}

export default UpcomingGames;