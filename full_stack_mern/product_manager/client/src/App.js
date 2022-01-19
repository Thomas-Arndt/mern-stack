import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Main from './views/Main';
import ProductForm from './components/ProductForm';
import ProductView from './views/ProductView';
import ProductList from './components/ProductList';

function App() {
  const [ signal, setSignal ] = useState(null)

  const signalRelay = (signal) => {
    setSignal(signal);
  }

  return (
    <div className="App">
      <Main>
        <BrowserRouter>
          <Switch>
            <Route path='/products/update/:id'>
              <ProductForm sendSignal={signalRelay} signal={signal} mode="update"/>
              <ProductView signal={signal} mode="update"/>
            </Route>
            <Route path='/products/:id'>
              <ProductView mode="view"/>
            </Route>
            <Route path='/'>
              <ProductForm sendSignal={signalRelay} signal={signal} mode="new"/>
              <ProductList signal={signal}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Main>
    </div>
  );
}

export default App;
