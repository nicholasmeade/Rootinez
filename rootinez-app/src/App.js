import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './Components/Home';
import HowTo from './Components/HowTo';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
import About from './Components/About';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <button><Link className='home-tab' to='/'>Home</Link></button>
        <button><Link className='register-tab' to='/register'>Register Here</Link></button>
        <button><Link className='howto-tab' to='/howto'>Tutorial</Link></button>
        <button><Link className='login-tab' to='/login'>Login</Link></button>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userhome' element={<UserHome />} />
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
