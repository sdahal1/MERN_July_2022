import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Top Self Development Books</h1>
      
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Main Lesson</th>
        </tr>
        <tr>
          <td>Power of Now</td>
          <td>Eckhart Tolle</td>
          <td>Be present so you can access all your best stuff</td>
        </tr>
        <tr>
          <td>It</td>
          <td>Stephen King</td>
          <td>To not mess with spiders</td>
        </tr>
        <tr>
          <td>Empire State of Mind</td>
          <td>Jay-Z</td>
          <td>How Jay-Z overcame obstacles to become a billionaire</td>
        </tr>
      </table>
    </div>
  
  );
}

export default App;
