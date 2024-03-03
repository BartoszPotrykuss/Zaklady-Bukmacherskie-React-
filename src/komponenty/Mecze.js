import Fieldset from "./Fieldset";
import '../style/Mecze.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mecze() {
    
    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://api.football-data.org/v4/matches/327117', {
            headers: {
                'Access-Control-Allow-Origin': "*",
              'X-Auth-Token': ' 98b681fd63414c89a93f62e2ef2a4410',  // Podmień na swój klucz API
            },
          });
  
          setMatchData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);  // Pusta tablica oznacza, że useEffect zostanie wykonany tylko raz po zamontowaniu komponentu
  
    if (!matchData) {
      return <div>Loading...</div>;
    }
  
    const homeTeamName = matchData?.homeTeam?.name;
    const awayTeamName = matchData?.awayTeam?.name;

    return (
        <div className="Mecze">
            <Fieldset tytul = "Piłka nożna" druzyna1 = "FC Barcelona" druzyna2 = "Real Madryt" kurs1 = "1.25" kurs2 = "2.35" id1 = "kurs1.1" id2 = "kurs1.2" />
        </div>
    );
}

export default Mecze;


/*
<Fieldset tytul = "Koszykówka" druzyna1 = "Trefl Gdańsk" druzyna2 = "King Szczecin" kurs1 = "1.56" kurs2 = "3.64" id1 = "kurs2.1" id2 = "kurs2.2" />
<Fieldset tytul = "MMA" druzyna1 = "Dariusz Lew" druzyna2 = "Filip Marcinek" kurs1 = "2.25" kurs2 = "2.35" id1 = "kurs3.1" id2 = "kurs3.2" />
<Fieldset tytul = "Siatkówka" druzyna1 = "Kędzierzyn-Koźle" druzyna2 = "Jastrzębski Węgiel" kurs1 = "1.81" kurs2 = "1.52" id1 = "kurs4.1" id2 = "kurs4.2" />
<Fieldset tytul = "Piłka Ręczna" druzyna1 = "Vive Kielce " druzyna2 = "Wisła Płock" kurs1 = "4.25" kurs2 = "1.65" id1 = "kurs5.1" id2 = "kurs5.2" />
*/