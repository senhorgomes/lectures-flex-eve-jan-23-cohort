// take a name and a mood as props
// The name will be displayed in an h2
// mood for conditional rendering
// function moodGetter(mood){
//     if(mood === "lazy"){
//         return(<p>I am feeling soooooo lazy!!</p>)
//     }
// }
function Mood(props){
    return(
        <section>
            <h2>My name is {props.name}</h2>
            {/* {moodGetter(props.mood)} */}
            {props.mood === "happy" && <p>I am feeling happy!</p>}
            {props.mood === "sad" && <p>I am feeling a bit gloomy!</p>}
            {props.mood === "mad" && <p>Grrr I am mad!</p>}
        </section>
    );
}

export default Mood;