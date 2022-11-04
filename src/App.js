import logo from "./knight.png";
import "./App.css";
import { Inventory } from "./features/inventory/Inventory";
import { HealthCounter } from "./features//inventory/HealthCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: "200px" }} />
        <Inventory />
        <HealthCounter />
      </header>
    </div>
  );
}

export default App;
