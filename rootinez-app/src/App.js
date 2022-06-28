import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './Components/Home';
import HowTo from './Components/HowTo';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userhome' element={<UserHome />} />
          <Route path='/howto' element={<HowTo />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
