import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detailplayer from './components/pages/Detail/Detail.player';
import About from './components/pages/About/About';
import Squad from './components/pages/squad/Squad';
import Club from './components/pages/Detail_club/Detail_club';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/player/:id' element={<Main children={<Detailplayer />} />} />
        <Route path='/club/:name/:id' element={<Main children={<Club/>} />} />
        <Route path='/team-table' element={<Main children={<Squad />} />} />
        <Route path='/about' element={<Main children={<About />} />} />

      </Routes>
    </>
  );
}

export default App;
