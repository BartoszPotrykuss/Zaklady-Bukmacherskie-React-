import '../style/Obstawianie.css';

function Obstawianie () {
    
    let pieniadze;
    let wygrana;
    let podsumowanie;
    let calkowityKurs;

    const Wygrana = () => {
        calkowityKurs = document.querySelector("#kurs").innerHTML;
        pieniadze = document.querySelector("#pieniadze").value;
        wygrana = pieniadze * calkowityKurs;
        wygrana = Math.round(wygrana * 100)/100;
        document.querySelector("#wygrana").innerHTML=wygrana + " PLN";        
    }

    const Obstaw = () => {
        Wygrana();
        podsumowanie = "Obstawiono " + pieniadze + "zł z kursem " + calkowityKurs + "<br> Możliwa wygrana: " + wygrana + "zł.";
        document.querySelector("#podsumowanie").innerHTML=podsumowanie;
    }

    return (
        <div className='Obstawianie'>
            <p>Ile pieniędzy chcesz obstawić?</p>
            <input 
                type="text" 
                id="pieniadze" 
                onKeyUp={() => {
                    Wygrana();
                }}
                /> <br /> 
            <p>Twój kurs: </p>
            <div id="kurs">1</div>
            <p>Do wygrania:</p>
            <div id="wygrana"></div>
            <input 
                type="button" 
                value="Obstaw" 
                onClick={() => {
                    Obstaw();
                }} 
                />
            <div id="podsumowanie"></div>
        </div>
    );
}

export default Obstawianie;