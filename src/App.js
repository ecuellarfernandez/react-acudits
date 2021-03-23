import React from "react";
import './static/css/App.css';
import Weather from "./components/Weather";
import Jokes from "./components/Jokes";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Welcome from "./components/Welcome";

function App() {

  return (
    <Router>

      <div className='appContainer'>
        <Switch>
          <Route path='/principal'>
            <Weather />
            <Jokes />
            <Link to='/'>&#129044; Welcome</Link>
          </Route>
          <Route path='/'>
            <Welcome />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}

export default App;
