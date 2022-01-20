import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Context from './context/Context';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import Main from './views/Main';

function App() {

  const [ authorList, setAuthorList ] = useState([]);
  const [ mode, setMode ] = useState('new');

  const onListUpdate = (updatedList) => {
    setAuthorList(updatedList);
  };

  return (
    <div className="App">
      <Context.Provider value={{mode, setMode}}>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/new'>
                <AuthorForm />
              </Route>
              <Route path='/error'>
                <h5 className="text-center col-6 mt-5">Sorry, the author you are looking for cannot be found. If you would like to create an entry for this author,&nbsp;
                <Link to="/new" className="btn-sm btn-success text-decoration-none">Click Here!</Link></h5>
              </Route>
              <Route path='/edit/:id'>
                <AuthorForm />
              </Route>
              <Route path='/'>
                <AuthorList/>
                <Link to='/new' onClick={()=>setMode('new')} className="btn btn-success">New Author</Link>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
