import React from 'react';
import '../style/OcenaStrony.css'

class OcenaStrony extends React.Component {
    state = {
        oc1 : "świetna",
        oc2: "dobra",
        oc3: "średnia",
        oc4: "słaba",
        oc5: "bardzo słaba"
    }
    render() {
        return(
            <div className="Ocena">
                <p>Oceń stronę</p>
                <ElementOceny ocena = {this.state.oc1} id = '1'/>
                <ElementOceny ocena = {this.state.oc2} id = '2'/>
                <ElementOceny ocena = {this.state.oc3} id = '3'/>
                <ElementOceny ocena = {this.state.oc4} id = '4'/>
                <ElementOceny ocena = {this.state.oc5} id = '5'/>
            </div>
        );
    }
}

const ElementOceny = (props) => {
    return (
        <React.Fragment>
            <label for={props.id} className='ElementOceny'>{props.ocena} </label>
            <input type="radio" value={props.ocena} id={props.id} name='ocena'/>
            <br />
        </React.Fragment>
    )
}

export default OcenaStrony;