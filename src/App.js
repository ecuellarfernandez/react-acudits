import React, { useState } from "react";

function App() {

  const url = 'https://icanhazdadjoke.com/';
  const [joke, setJoke] = useState('')

  const getData = async ()=> {
    try{
      const res = await fetch(url, {headers:{'Accept': 'application/json'}});
      const data = await res.json();
      setJoke(data.joke)
    }catch(e){
      console.error(e)
    }
  }

  return (
    <div>
      <h1>Jokes</h1>
      <p>{joke}</p>
      <button onClick={getData}>Next Joke</button>
    </div>
  );
}

export default App;
