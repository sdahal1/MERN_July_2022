import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner Menu</h1>
      <MenuItem dishName = {"Basil Calamari- Thai Style"} price={12.00}>
        <p>Its fried Squid.</p>
        <em>Note: This food contains the following allergens: Seafood, Gluten</em>
      </MenuItem>

      <MenuItem dishName = {"Strogonoff"} price={15.00}>
        <p>Its Pasta with beef meat.</p>
        <em>Note: This food contains the following allergens: Gluten</em>
      </MenuItem>

      <MenuItem dishName = {"Buffalo Wings"} price={8.00}>
        <p>Its only one wing.</p>
        <strong>Please select spice level between 1-5</strong>
        <em>Note: This food contains the following allergens: Seafood, Gluten</em>
      </MenuItem>

    </div>
  );
}

export default App;
