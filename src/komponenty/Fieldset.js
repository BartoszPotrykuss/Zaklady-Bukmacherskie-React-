import React, { useState } from 'react';
import '../style/Fieldset.css';

function Fieldset(props) {
    const [calkowityKurs, setCalkowityKurs] = useState(0);

    const zmienKolor = (id) => {
        let button = document.getElementById(id);
        button.classList.add("clicked");
        button.disabled = true;
    };

    const dodaj = (value) => {
        setCalkowityKurs(prevCalkowityKurs => prevCalkowityKurs + value);
    };

    const kurs = () => {
        setCalkowityKurs(prevCalkowityKurs => Math.round(prevCalkowityKurs * 100) / 100);
    };

    const wygrana = () => {
        let pieniadze = document.querySelector("#pieniadze").value;
        let wygrana = pieniadze * calkowityKurs;
        wygrana = Math.round(wygrana * 100) / 100;
        document.querySelector("#wygrana").innerHTML = wygrana + " PLN";
    }

    return (
        <fieldset>
            <legend>{props.tytul}</legend>
            {props.druzyna1} <input
                type="button"
                value={props.kurs1}
                id={props.id1}
                onClick={() => {
                    zmienKolor(props.id1);
                    dodaj(props.kurs1);
                    kurs();
                    wygrana();
                }}
            />
            <br />
            {props.druzyna2} <input
                type="button"
                value={props.kurs2}
                id={props.id2}
                onClick={() => {
                    zmienKolor(props.id2);
                    dodaj(props.kurs2);
                    kurs();
                    wygrana();
                }}
            />
        </fieldset>
    );
}

export default Fieldset;
