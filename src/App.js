import logo from './logo.svg';
import './App.css';
import MainScreen from './screens/MainScreen/MainScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {BrowserRouter} from "react-router-dom";
import AppRotes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <AppRotes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
