import './App.css';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';

function App() {
  return (
    <div className="App container">
      <h1 className="m-3 text-info">UseState Hooks</h1>
      <ClassState />
      <br />
      <hr />
      <FunctionState />
    </div>
  );
}

export default App;
