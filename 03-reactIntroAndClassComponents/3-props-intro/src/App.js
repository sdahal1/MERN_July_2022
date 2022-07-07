import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner Menu</h1>
      <MenuItem dishName = {"Basil Calamari- Thai Style"} price={12.00} description={"Fried squid tho"}></MenuItem>

      <MenuItem dishName = {"Strogonoff"} price={15.00} description={"Pasta tho"}></MenuItem>

      <MenuItem dishName = {"Buffalo Wings"} price={8.00} description={"Comes with one wing tho"}></MenuItem>

    </div>
  );
}

export default App;
