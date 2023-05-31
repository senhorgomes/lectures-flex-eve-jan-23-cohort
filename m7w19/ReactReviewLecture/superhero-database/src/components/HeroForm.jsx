// create a new hero, and push it to the database via axios
import { useState } from "react";
import axios from "axios";
function HeroForm({newHero, setNewHero, setFetchedHeroList}) {
    // const [newHero, setNewHero] = useState("")
    const handleChange = (event) => {
        setNewHero(event.target.value);
    }
    const handleSubmit = () =>{
        // call our axios request to the post route
        return axios.post("/heroes", {
           newHero
          })
        .then((res)=>setFetchedHeroList(res.data))
    }
    return (
        <>

            <input 
                type="text"
                name="name"
                placeholder="Please insert a new hero name:"
                value={newHero}
                onChange={handleChange}
                // onChange={(event)=>setNewHero(event.target.value)}
            />
            <button onClick={handleSubmit}>Submit a new Hero!</button>

        </>
    );
}

export default HeroForm;