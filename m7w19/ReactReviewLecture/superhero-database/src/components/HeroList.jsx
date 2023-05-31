
// call axios with useEffect
// capture the information, then set it to state
// then with state, we are going to map the information, and render them as li elements

import axios from 'axios';
import { useEffect, useState } from 'react';
import HeroListItem from './HeroListItem';

function HeroList({fetchedHeroList}) {

    // const [fetchedHeroList, setFetchedHeroList] = useState([]);

    // useEffect(()=>{
    //     axios.get('/heroes')
    //     // capture the information, then set it to state
    //     .then((res)=>setFetchedHeroList(res.data))
    //     // setState is async
    // }, [])

    return (
        <>
            <h2>Hero List:</h2>
            <ul>

                {/* Displayed here as li */}
                {fetchedHeroList.map((element)=>{
                    return(
                        <HeroListItem singleHero={element} />
                    )
                })}
            </ul>
        </>
    );
}

export default HeroList;