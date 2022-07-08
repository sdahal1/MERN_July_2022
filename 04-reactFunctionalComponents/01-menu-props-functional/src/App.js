import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner</h1>
      <MenuItem dishName= {"Calamari"} price={12.00}>
          <p>Its fried squid</p>
          <em>May contain the following allergens: Seafood, Wheat</em>
      </MenuItem>
      <MenuItem dishName= {"Strogonoff"} price={18.00}>
        <p>Its pasta with meat.</p>
        <em>Contains Wheat</em>
      </MenuItem>
      <MenuItem dishName= {"Steak"} price={20.00}>
        <p>Its steak tho, wachu wan</p>
        <strong>Please indicate to server "Well Done" or "Medium Rare" or "Raw"</strong>
        <br />
        <em>Contains a lot of vitamin A. No allergens tho</em>
      </MenuItem>
    </div>
  );
}

export default App;
