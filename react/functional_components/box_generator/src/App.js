import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [blocks, setBlocks] = useState([])

  const addBlock = (newBlock) => {
    let newBlocks = [...blocks, newBlock]
    setBlocks(newBlocks);
  }

  return (
    <div className="App">
      <UserForm addBlock={addBlock}/>
      <BoxDisplay blocks={blocks}/>
    </div>
  );
}

export default App;
