import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detailplayer from './components/pages/Detail/Detail.player';
import About from './components/pages/About/About';
import Squad from './components/pages/squad/Squad';
import Club from './components/pages/Detail_club/Detail_club';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/player/:id' element={<Main children={<Detailplayer />} />} />
        <Route path='/club/:name/:id' element={<Main children={<Club/>} />} />
        <Route path='/team-table' element={<Main children={<Squad />} />} />
        <Route path='/match/:id' element={<Main children={<Squad />} />} />
        <Route path='/about' element={<Main children={<About />} />} />
        <Route path='/contact' element={<Main children={<Contact />} />} />
        <Route path='/login' element={<Main children={<Login/>} />} />
        <Route path='/register' element={<Main children={<Register/>} />} />

      </Routes>
    </>
  );
}

export default App;
