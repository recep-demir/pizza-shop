import './App.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import {MenuList} from "./helpers/MenuList";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
      <Menu menuList ={MenuList} />
      <About />

      
      
      
      
    </div>
  );
}

export default App;
