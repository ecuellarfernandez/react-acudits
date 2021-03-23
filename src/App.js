import React, { useState, Fragment } from "react";
import './static/css/App.css'
import Wheater from "./components/Weather";
import Jokes from "./components/Jokes";

function App() {

  const [welcome, setWelcome] = useState(true);

  const handleWelcome = ()=>{
    setWelcome(prev=>!prev);
  }

  const condition = welcome ?
    <div className="welcome">
        <h1>Welcome</h1>
        <button onClick={handleWelcome}>Enter jokes page &#10142;</button>
    </div> :
    <Fragment>
        <Wheater />
        <Jokes />
        <button onClick={handleWelcome}>&#129044;</button>
    </Fragment>;

  return (
    <div className='appContainer'>
      {condition}
    </div>
  )
}

export default App;
