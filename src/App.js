import logo from "./logo.svg";
import "./App.css";
// import { Users, Abhi } from "./User";
import { Users, Abhi } from "./User";
import Formcom from "./Formcom";
import { Componentdiidmount } from "./Componentdiidmount.js";
import { ComponenetDidupdatesss } from "./ComponenetDidupdatesss.js";
import Arraylistcomponenet from "./Arraylistcomponenet.js";

function App() {
  return (
    <div className="App">
      <Arraylistcomponenet />
      <h1>abhi</h1>
      <Componentdiidmount />
      <p>mount update</p>
      <ComponenetDidupdatesss />

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
