import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Home from './Components/Home';
import HowTo from './Components/HowTo';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
import About from './Components/About';
import Login from './Components/Login';

function App() {
  // useState of token for authentication
  const [token, setToken] = useState('no token yet')

  // setting user's token for authentication to be passed between components
  const loginToken = (key) => {
    setToken(key)
    console.log(key)
  }

  console.log('hit app page')
  console.log(token)

  return (
    <div className='App'>
      <header className='header'>
        <button><Link className='home-tab' to='/'>Home</Link></button>
        <button><Link className='register-tab' to='/register'>Register Here</Link></button>
        <button><Link className='howto-tab' to='/howto'>Tutorial</Link></button>
        <button><Link className='login-tab' to='/login'>Login</Link></button>
        <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register loginToken={loginToken}/>} />
          <Route path='/login' element={<Login loginToken={loginToken} />} />
          <Route path='/userhome' element={<UserHome token={token} loginToken={loginToken} />} />
          <Route path='/howto' element={<HowTo />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer>
        <button><Link className='about-tab' to='/about'>About</Link></button>
      </footer>
    </div>
  );
}

export default App;
