import { useEffect, useState } from 'react';
import '../style/Obstawianie.css';

function Obstawianie ({ kurs }) {

    const [stawka, setStawka] = useState(null);
    const [wygrana, setWygrana] = useState(null);
    const [podsumowanie, setPodsumowanie] = useState(null);

    useEffect(() => {
        if (stawka !== null) {
            setWygrana((stawka * kurs).toFixed(2));
        }
    }, [stawka, kurs]);

    return (
        <div className='Obstawianie'>
            <p>Ile pieniędzy chcesz obstawić?</p>
            <input 
                type="text" 
                id="pieniadze"
                value={stawka}
                onChange={(e) => {
                    setStawka(e.target.value)
                }}
            /> <br /> 
            <p>Twój kurs: </p>
            <div id="kurs" >{kurs}</div>
            <p>Do wygrania:</p>
            <div id="wygrana">{wygrana} zł</div>
            <input 
                id='obstaw'
                type="button" 
                value="Obstaw"
                onClick={() => setPodsumowanie(`Obstawiono ${stawka}zł z kursem ${kurs}. Możliwa wygrana: ${wygrana} zł.`)}
            />
            <div id="podsumowanie">{podsumowanie}</div>
        </div>
    );
}

export default Obstawianie;