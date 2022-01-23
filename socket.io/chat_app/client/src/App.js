import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import io from 'socket.io-client';
import Context from './context/Context';
import Chat from './components/Chat';
import Main from './views/Main';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [ uuid, setUuid ] = useState('');
  const [ socket ] = useState(() => io(':8000'));

  useEffect(() => {
    socket.on('connection_ok', data => {
      console.log(data);
      console.log(socket.id);
      setUuid(socket.id);
    });
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{uuid, setUuid}}>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/login'>
                <LoginForm/>
              </Route>
              <Route path='/register'>
                <RegistrationForm />
              </Route>
              <Route path='/'>
                <Chat/>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

