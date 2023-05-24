import { useState, useEffect } from "react";
function Counter() {

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    // const [numberOfClicks2, setNumberOfClicks2] = useState(0);
    // Call its every time the component renders/rerenders
    // useEffect(()=>console.log("Here is a cool console log!"))
    // Called once during the initial render
    // useEffect(()=>console.log("Here is a cool console log!"),[])
    // Called everytime the dependecy is modified
    // useEffect(()=>console.log("Here is a cool console log!"),[numberOfClicks])
    // useEffect(()=>{
    //     const timer = setInterval(()=>setNumberOfClicks((prev) => prev + 1),1000)
    //     const cleanUp = () => {
    //         clearInterval(timer)
    //     }
    //     return cleanUp;
    // },[])

    return (
        <div className="darkmode">
            <h2>Counter:{numberOfClicks}</h2>
            {/* We should always try to avoid to manipulate state directly */}
            <button onClick={()=>setNumberOfClicks((prev) => prev + 1)}>Click me!</button>
            {/* <h2>Counter 2:{numberOfClicks2}</h2> */}
            {/* We should always try to avoid to manipulate state directly */}
            {/* <button onClick={()=>setNumberOfClicks2((prev) => prev + 1)}>Click me!</button> */}
        </div>
    );
}

export default Counter;