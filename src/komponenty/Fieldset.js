import React, { useState } from 'react';
import '../style/Fieldset.css';

function Fieldset(props) {


    const zmienKolor = (idClicked, idUnClicked, kurs) => {
        let buttonClicked = document.getElementById(idClicked);
        let buttonUnClicked = document.getElementById(idUnClicked);
        buttonClicked.classList.add("clicked");
        buttonClicked.disabled = true;
        buttonUnClicked.disabled = true;
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
            />
            <br />
            {props.druzyna2} <input
                type="button"
                value={props.kurs2}
                id={props.id2}
                onClick={() => {
                    zmienKolor(props.id2, props.id1, props.kurs2);
                }}
            />
        </fieldset>
    );
}

export default Fieldset;
