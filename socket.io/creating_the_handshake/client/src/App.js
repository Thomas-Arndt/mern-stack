import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import io from 'socket.io-client';
import Main from './views/Main';

function App() {

  const [ socket ] = useState(()=> io(':8000'));

  useEffect(()=> {
    console.log('Is this running?');
    socket.on('test', data => console.log(data));
    return () => socket.disconnect(true);
  }, []);


  return (
    <div className="App">
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/'>
                <h1>Socket Test</h1>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
    </div>
  );
}

export default App;
