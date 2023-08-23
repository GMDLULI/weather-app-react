import "./App.css";
//import "bootstrap/dist/css/bootstrap. css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App container">
      <h1> Weather app </h1>
      <Weather />
      <footer>
        <p>
          Coded by Gugulethu mdluli <a href="#">Open source code</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
