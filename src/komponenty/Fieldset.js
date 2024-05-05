import React, { useState } from 'react';
import '../style/Fieldset.css';

function Fieldset(props) {
    const [selectedButton, setSelectedButton] = useState(null);

    const zmienKolor = (idClicked, idUnClicked, kurs) => {
        setSelectedButton(idClicked);
        props.setKurs(kurs);
    };

    return (
        <fieldset>
            <legend>{props.tytul}</legend>
            {props.druzyna1} <input
                type="button"
                value={props.kurs1}
                id={props.id1}
                onClick={() => {
                    zmienKolor(props.id1, props.id2, props.kurs1);
                }}
                className={selectedButton === props.id1 ? "clicked" : ""}
                disabled={selectedButton === props.id1}
            />
            <br />
            {props.druzyna2} <input
                type="button"
                value={props.kurs2}
                id={props.id2}
                onClick={() => {
                    zmienKolor(props.id2, props.id1, props.kurs2);
                }}
                className={selectedButton === props.id2 ? "clicked" : ""}
                disabled={selectedButton === props.id2}
            />
        </fieldset>
    );
}

export default Fieldset;
