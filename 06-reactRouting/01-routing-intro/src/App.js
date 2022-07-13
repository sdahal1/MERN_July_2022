import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Players from './components/Players';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <h1>Routing Intro</h1>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<h3>This is the home page</h3>}></Route>
        <Route exact path="/aboutus" element={<><About/><h1>Hi</h1></>}></Route>
        <Route exact path="/players" element={<Players/>}></Route>
        <Route exact path="/teams" element={<Teams/>}></Route>
        <Route exact path="/teams/:id" element={<Teams/>}></Route>
        <Route exact path="/teams/:id/:color1" element={<Teams/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
