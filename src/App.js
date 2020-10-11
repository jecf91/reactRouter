import React, { useState } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import User from './components/user';

function App() {

  const [ isLogged, setIsLogged ] = useState(false);

  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/My-Name-Goes-Here">User</Link>
          </li>
        </ul>
        <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? 'Log out' : 'Login'}
        </button>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/about" render={About} />
          <Route path="/user/:userName" render={
            ({match, history}) => {
             return isLogged ? (<User userName={match.params.userName} history={history}/>) : (<Redirect to="/" />)
            }
          } />
          <Route render={() => <h1>404 not found!</h1>} />
        </Switch>
      </div>
  );
}

export default App;
