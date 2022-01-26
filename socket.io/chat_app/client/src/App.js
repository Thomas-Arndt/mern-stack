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
import NavBar from './components/NavBar';
import UserDashboard from './components/UserDashboard';

function App() {
  const [ userEmail, setUserEmail ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ room, setRoom ] = useState('Room 1');
  const [ socket ] = useState(() => io(':8000'));

  useEffect(() => {
    socket.on('connection_ok', data => {
      // console.log(data);
      // console.log(socket.id);
    });
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <Context.Provider 
        value={{
          userEmail, setUserEmail, 
          userName, setUserName,
          room, setRoom
        }}>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/register'>
                <RegistrationForm />
              </Route>
              <Route path='/dashboard'>
                <NavBar socket={socket}/>
                <UserDashboard socket={socket}/>
              </Route>
              <Route path='/chat'>
                <NavBar socket={socket}/>
                <Chat socket={socket}/>
              </Route>
              <Route path='/'>
                <LoginForm/>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

