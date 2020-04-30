import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Counter from './Counter'
import Data from './Data';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import socketIO from 'socket.io-client'

const io = socketIO("http://192.168.1.81:8000")

window.io = io


io.on('connect', () => {
    io.on('random', payload => console.log(payload))

    io.emit('message', "Hi from the client!!")

    io.on('message-response', payload => console.log(payload))

    io.emit('chat', {user: "Vidhi", message: "HELLOOO!!"})

    io.on('chat-message', payload => console.log(payload))
})


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
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
