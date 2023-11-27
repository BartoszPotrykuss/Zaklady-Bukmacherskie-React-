function Image (props) {
    return(
        <div className="Image">
            <img src={props.imageSource} alt={props.alt} className="image" />
        </div>
    );
}

export default Image;