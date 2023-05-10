function HelloComponent(props) {
    return( 
        <div className="header">
            <p>Hello, {props.studentName}</p>
            <p>How are you?</p>
            <img/>
        </div>
    );
}

export default HelloComponent;