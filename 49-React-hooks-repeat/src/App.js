import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Counter from './Counter'
import Data from './Data';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/home" component={Home} /> */}
            {/* <Route path="/home" render={(routerProps) => <Home {...routerProps} />} /> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
            <Data />
    </div>
    </BrowserRouter>
  
  
  );
}

export default App;
