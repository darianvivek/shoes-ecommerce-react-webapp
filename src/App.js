import './App.css';
import React from 'react';
import {Route,Routes,Link, NavLink} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Loginn';
import Signup from './components/Signupp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <nav style={{maxWidth:"100%"}}>
        <div className='logo'>
          <NavLink to="" style={{textDecorationLine:"underline"}}>
          <h1>DV</h1>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="Signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
<Routes>
<Route path="" element={<Home/>}/>
<Route path="login" element={<Login/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="signup" element={<Signup/>}/>
</Routes>
<Footer/>
    </div>
  );
}

export default App;
