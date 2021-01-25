import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter> 
        <Navbar/>
        <Main />
    </BrowserRouter>
    </div>
  );
}

export default App;
