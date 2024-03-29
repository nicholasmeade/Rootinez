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

function App() {

    // useState of user's credentials
    const [loginAccount, setLoginAccount] = useState({
      user: {
          email: '',
          id: '',
          token: ''
      }
  })

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login login={loginAccount} setLogin={setLoginAccount} />} />
          <Route path='/userhome' element={<UserHome login={loginAccount} setLogin={setLoginAccount} />} />
          <Route path='/howto' element={<HowTo login={loginAccount} setLogin={setLoginAccount} />} />
          <Route path='/about' element={<About />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
