import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App container">
      <Weather />
      <footer>
        <p>
          Coded by Gugulethu mdluli{" "}
          <a href="https://github.com/GMDLULI/weather-app-react">
            Open source code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
