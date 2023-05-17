import { useState } from "react";
export default function PlantListItem({name, last_watered, freq_of_water, wateredPlant, onClick}) {
    // const [wateredPlant, setWateredPlant] = useState(false);
    return (
        <li>
            <h2>Name: {name}</h2>
            <h2>I was given water {last_watered} days</h2>
            <h2>I should be watered every {freq_of_water} days</h2>
            {/* We can't console.log state after setting it, because setState/setter is async */}
            {!wateredPlant && <button onClick={()=>{onClick()}}>Please give me water!</button>}
        </li>
    )
}