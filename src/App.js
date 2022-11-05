import logo from "./knight.png";
import "./App.css";
import { Inventory } from "./features/inventory/Inventory";
import { HealthCounter } from "./features//inventory/HealthCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inventory />
        <HealthCounter />
      </header>
    </div>
  );
}

export default App;
