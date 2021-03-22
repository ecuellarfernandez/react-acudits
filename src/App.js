import React, { useEffect, useState } from "react";
import './App.css'
import Wheater from "./components/Weather";
import fetchData from "./helpers/fetchData";

function App() {

  const url = 'https://icanhazdadjoke.com/';
  const [joke, setJoke] = useState(null);

  useEffect(()=>{
    getData();
  },[])
  
  const getData = async ()=>{
    const data = await fetchData(url);
    setJoke(data.joke);
  }
  
  const jokeRender = joke ? joke : 'fetching...';

  return (
    <div className='appContainer'>
      <Wheater />
      <div className="jokesCard">
        <h1>Jokes</h1>
        <p>{jokeRender}</p>
        <button onClick={getData}>Next Joke</button>
      </div>
    </div>
  );
}

export default App;
