import Fieldset from "./Fieldset";
import '../style/Mecze.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Obstawianie from "./Obstawianie";

function losujKurs() {
  return (Math.random() * (5 -1.01) + 1.01).toFixed(2);
}


let wylosowaneKursy = [];

for (let i = 0; i < 10; i++) {
  wylosowaneKursy[i] = [];
  for (let j = 0; j < 2; j++) {
    wylosowaneKursy[i][j] = losujKurs();
  }
}

function Mecze(props) {
    
  const [allTeamNames, setAllTeamNames] = useState(null);
  const [kurs, setKurs] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?' + props.parameters, {
        });

        const teamNames = response.data.data.map(match => ({
          druzyna1: match.team1,
          druzyna2: match.team2,
          competition: match.competition
        }));
        
        setAllTeamNames(teamNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  // Pusta tablica oznacza, że useEffect zostanie wykonany tylko raz po zamontowaniu komponentu

  // Funkcja do przekazywania kursu do komponentu Obstawianie
  const handleSetKurs = (kurs) => {
    if (!isNaN(kurs)) { 
      setKurs(prevKurs => (prevKurs * kurs).toFixed(2));
    }
  }

  if (!allTeamNames) {
    return <div>Loading...</div>;
  }


  return (
      <div className="Mecze">
          {allTeamNames.map((match, index) => (
            <Fieldset 
              key={index} 
              tytul={match.competition} 
              druzyna1={match.druzyna1} 
              druzyna2={match.druzyna2} 
              kurs1={wylosowaneKursy[index][0]}
              kurs2={wylosowaneKursy[index][1]} 
              id1={`kurs${index+1}.1`} 
              id2={`kurs${index+1}.2`} 
              setKurs={handleSetKurs}
            />
          ))}
          <Obstawianie kurs={kurs} />
      </div>
  );
}


export default Mecze;

