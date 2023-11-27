import '../style/Foot1.css';

function Foot1(props) {
    return (
        <div className="Foot1">
            <h2>{props.tytul}</h2>
            <br />
            <a href="#">{props.p1}</a>
            <br />
            <a href="#">{props.p2}</a>
            <br />
            <a href="#">{props.p3}</a>
        </div>
    );
}

export default Foot1;