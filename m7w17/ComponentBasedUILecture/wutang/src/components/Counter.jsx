// Create a counter component
// Which has a button, when clicked will increase its value by one
import { useState } from "react";

// export default function Counter(props) {
export default function Counter({title, defaultValueOfClicks}) {
    // In the event that defaultValueOfClicks is false, amountOfClicks will be set to 0
    const [amountOfClicks, setAmountOfClicks] = useState(defaultValueOfClicks || 0);
    return (
        <div>
            <h2>{title}</h2>
            <h2>Amount of clicks: {amountOfClicks}</h2>
            <button onClick={()=>{setAmountOfClicks((prev)=>prev + 1)}}>Click me!</button>
        </div>
    );
}

// export default Counter;