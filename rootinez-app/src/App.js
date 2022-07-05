import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Home from './Components/Home';
import HowTo from './Components/HowTo';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
import About from './Components/About';
import Login from './Components/Login';
import Logout from './Components/Logout';
import githubIcon from './Icons/Github.png';
import linkedinIcon from './Icons/LinkedIn.png';

function App() {
  // useState of token for authentication
  const [token, setToken] = useState('')

  console.log('hit app page')
  console.log(token)

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register token={token} setToken={setToken} />} />
          <Route path='/login' element={<Login token={token} setToken={setToken} />} />
          <Route path='/userhome' element={<UserHome token={token} setToken={setToken} />} />
          <Route path='/howto' element={<HowTo />} />
          <Route path='/about' element={<About />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
