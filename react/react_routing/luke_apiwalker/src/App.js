import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Container from './components/Container';
import Display from './components/Display';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <UserForm/>
          <Switch>
            <Route path='/:resource/:id'>
              <Display/>
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
