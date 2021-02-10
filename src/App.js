import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';

function App(props) {

  return (
    <div className="App">
    <BrowserRouter> 
        <Navbar/>
        <Main users={props.appState.users} appState={props.appState}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
