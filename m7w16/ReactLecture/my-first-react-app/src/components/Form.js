import {useState} from "react";
function Form(){
    const [name, setName] = useState("")
    const changeHandler = (event) => {
        setName(event.target.value)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <input type="text" onChange={(event)=> changeHandler(event)}/>
        </div>
    )
}
export default Form;