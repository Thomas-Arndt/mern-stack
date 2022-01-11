import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Component_Tabs';
import Display from './components/Component_Display';

function App() {
  const [message, setMessage] = useState("");

  const passMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <Tabs passMessage={passMessage}/>
      <Display content={message}/>
    </div>
  );
}

export default App;
