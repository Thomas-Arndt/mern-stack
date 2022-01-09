import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Thomas" lastName="Arndt" age="33" hairColor="Brown"/>
    </div>
  );
}

export default App;
