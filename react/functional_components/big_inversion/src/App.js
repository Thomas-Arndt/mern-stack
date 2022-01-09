import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Thomas" lastName="Arndt" age="33" hairColor="Brown"/>
      <PersonCard firstName="Jack" lastName="O'Niell" age="33" hairColor="Brown"/>
      <PersonCard firstName="Samantha" lastName="Carter" age="33" hairColor="Brown"/>
      <PersonCard firstName="Daniel" lastName="Jackson" age="33" hairColor="Brown"/>
    </div>
  );
}

export default App;
