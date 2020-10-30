import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>
        <HelloWorld /> 
        <HelloWorld /> 
          </h1>
      </header>
    </div>
  );
}

//  First Component
function HelloWorld() {
  return (
    <h1>Hello World!</h1>
  )
}

export default App;
