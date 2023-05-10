import { useState } from "react";

function Counter(){
    // State - hooks
    // The first element, getter
    // The second element, a function that sets the new value of state-> Setter
    const [state, setState] = useState(0)
    return(
        <div>
            <p>Counter: {state}</p>
            <button onClick={()=>setState((prev)=>prev+1)} >Click me!</button>
        </div>
    )
}
export default Counter;