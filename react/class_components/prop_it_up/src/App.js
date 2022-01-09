import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCardComponent';

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="d-flex-column">
        <PersonCard firstName="Thomas" lastName="Arndt" age="33" hairColor="Brown"/>
        <PersonCard firstName="Jack" lastName="O'Niell" age="47" hairColor="Salt and Pepper"/>
        <PersonCard firstName="Samantha" lastName="Carter" age="34" hairColor="Blonde"/>
        <PersonCard firstName="Daniel" lastName="Jackson" age="37" hairColor="Brown"/>
      </div>
    </div>
  );
}

export default App;
