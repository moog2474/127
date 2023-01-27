import logo from './logo.svg';
import Search from './components/Search';
import Toggler from './components/Toggler'
import Cat from './components/Category';
import './App.css';

function App() {
  return (
    <div className="container">
      <Search />
      <Toggler />
      <Cat />
    </div>
  );
}

export default App;
