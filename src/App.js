import logo from "./knight.png";
import "./App.css";
import { Inventory } from "./features/inventory/Inventory";
import { HealthCounter } from "./features//inventory/HealthCounter";

function App() {
  return (
    <div className="App" data-testid="app-component">
      <header className="App-header">
        <p data-test="header-message">Testing Text for Cypress</p>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          data-test="logo"
          data-testid="logo"
        />
        <Inventory />
        <HealthCounter />
      </header>
    </div>
  );
}

export default App;
