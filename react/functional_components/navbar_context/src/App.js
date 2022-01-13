import React, { useState} from 'react';
import FormWrapper from './components/FormWraper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import UserContext from './context/UserContext'

function App() {
  const [formName, setFormName] = useState('Thomas');
  return (
    <div className="App">
      <UserContext.Provider value={{formName, setFormName}}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </UserContext.Provider>
    </div>
  );
}

export default App;
