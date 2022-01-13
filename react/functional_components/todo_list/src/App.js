import './App.css';
import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);

  const onNewList = (newList) => { //updates master list anytime a component modifies the list locally
    setList(newList);
    localStorage.setItem('list', JSON.stringify(newList))
  }

  useEffect(() => {
    const loadList = localStorage.getItem('list');
    setList(JSON.parse(loadList));
  }, [])

  return (
    <div className="App">
      <div className="wrapper d-flex-column col-6 offset-3">
        <UserForm onNewList={onNewList} list={list}/>
        <List onNewList={onNewList} list={list}/>
      </div>
    </div>
  );
}

export default App;
