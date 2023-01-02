import logo from "./logo.svg";
import "./App.css";
// import { Users, Abhi } from "./User";
import { Users, Abhi } from "./User";
import Formcom from "./Formcom";

function App() {
  return (
    <div className="App">
      <h1>abhi</h1>
      {/* <Formcom></Formcom> */}
      <Formcom />

      <Users />
      <Abhi name="propsabhi" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
