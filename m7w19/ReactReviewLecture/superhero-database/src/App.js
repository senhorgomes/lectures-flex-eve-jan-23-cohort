import './App.css';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [fetchedHeroList, setFetchedHeroList] = useState([]);
  const [newHero, setNewHero] = useState("");
  useEffect(()=>{
    axios.get('/heroes')
      // capture the information, then set it to state
      .then((res)=>setFetchedHeroList(res.data))
      // setState is async
  }, [])
  return (
    <div className="App-header">
      <HeroForm newHero={newHero} setNewHero={setNewHero} setFetchedHeroList={setFetchedHeroList}/>
      <HeroList fetchedHeroList={fetchedHeroList}/>
    </div>
  );
}

export default App;
