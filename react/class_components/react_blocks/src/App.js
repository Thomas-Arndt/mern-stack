import React from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Navigation from './Components/NavigationComponent';
import Main from './Components/MainComponent';
import Subcontent from './Components/SubcontentComponent';
import Advertisement from './Components/AdvertisementComponent';

function App() {
  return (
    <div className="App App-background App-margin App-padding d-flex-column gap-2">
      <Header/>
      <div className="d-flex gap-2">
        <Navigation/>
        <Main>
          <Subcontent/>
          <Subcontent/>
          <Subcontent/>
          <Advertisement/>
        </Main>
      </div>
    </div>
  );
}

export default App;
