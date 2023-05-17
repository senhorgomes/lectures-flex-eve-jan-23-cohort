import plantData from '../data/data.json'
import PlantListItem from './PlantListItem';
import { useState } from 'react';
export default function PlantList() {
    const [wateredPlant, setWateredPlant] = useState(false);
    const waterMe = () =>{
        setWateredPlant(true);
    }
    return (
        <ul>
            {plantData.map((plant, index) => {
                return (
                    <PlantListItem key={index+"hello"} {...plant} wateredPlant={wateredPlant}onClick={()=>waterMe()}/>
                // <li>
                //     <h2>Name: {plant.name}</h2>
                //     <h2>I was given water {plant.last_watered} days</h2>
                //     <h2>I should be watered every {plant.freq_of_water} days</h2>
                // </li>
                )
            })}
        </ul>
    );
}