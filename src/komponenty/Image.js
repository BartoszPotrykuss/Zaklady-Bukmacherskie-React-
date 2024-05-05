import '../style/Image.css'

function Image (props) {
    return(
        <div className="Image">
            <img src={props.imageSource} alt={props.alt} className="image" id={props.id} />
        </div>
    );
}

export default Image;