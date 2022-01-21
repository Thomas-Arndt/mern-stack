import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Context from './context/Context';
import PlayerList from './components/PlayerList';
import Main from './views/Main';
import PlayerForm from './components/PlayerForm';
import TabNav from './components/TabNav';
import PlayerStatus from './components/PlayerStatus';

function App() {
  const [ signal, setSignal ] = useState(null);
  const [ lockout, setLockout ] = useState(false);

  return (
    <div className="App">
      <Context.Provider value={{signal, setSignal, lockout, setLockout}}>
        <BrowserRouter>
          <Main>
            <TabNav/>
            <Switch>
              <Route path='/status/game/:id'>
                <PlayerStatus />
              </Route>
              <Route path='/players/addplayer'>
                <PlayerForm/>
              </Route>
              <Route path='/players/list'>
                <PlayerList/>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
