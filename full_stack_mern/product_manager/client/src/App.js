import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Context from './context/Context';
import Main from './views/Main';
import ProductForm from './components/ProductForm';
import ProductView from './views/ProductView';
import ProductList from './components/ProductList';

function App() {
  const [ signal, setSignal ] = useState(null);
  const [ mode, setMode ] = useState('new');
  
  return (
    <div className="App">
      <Context.Provider value={{signal, setSignal, mode, setMode}}>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/products/update/:id'>
                <ProductForm mode="update"/>
                <ProductView mode="update"/>
              </Route>
              <Route path='/products/:id'>
                <ProductView mode="view"/>
              </Route>
              <Route path='/'>
                <ProductForm mode="new"/>
                <ProductList/>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
