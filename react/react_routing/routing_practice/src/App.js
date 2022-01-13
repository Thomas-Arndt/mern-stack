import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/:input">
            <Display/>
          </Route>
          <Route path="/:input/:textColor/:bgColor">
            <Display/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
