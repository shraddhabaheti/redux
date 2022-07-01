import logo from './logo.svg';
import './App.css';
//import Login from './Registration';
import Registration from './Registration';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';

//import Registration from '../src/rcs/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/reg" element={<Registration/>}></Route> */}
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
