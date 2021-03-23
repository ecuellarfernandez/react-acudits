import React, { useEffect, useState } from 'react'
import fetchData from '../helpers/fetchData';
import '../static/css/Jokes.css';

function Jokes() {

    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    },[])
    
    const getData = async () => {
        setLoading(true);
        const url = 'https://icanhazdadjoke.com/';
        const data = await fetchData(url);
        setJoke(data.joke);
        setLoading(false)
    }
    
    const jokeRender = loading ? <p>...</p> : <p>{joke}</p>;

    return (
        <div className="jokesCard">
            <h1>Jokes</h1>
            {jokeRender}
            <button onClick={getData}>Next Joke</button>
        </div>
    )
}

export default Jokes;
