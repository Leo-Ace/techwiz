import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detail_player from './components/pages/Detail/Detail.player';
import About from './components/pages/About/About';
import Detail_club from './components/pages/Detail_club/Detail_club';
import Squad from './components/pages/squad/Squad';
import Match from './components/pages/MatchDetail/Match';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='player/Detail_player' element={<Main children={<Detail_player />} />} />
        <Route path='/Spad' element={<Main children={<Squad/>} />} />
        <Route path='/home/match' element={<Main children={<Match/>} />} />
        <Route path='/about' element={<Main children={<About />} />} />
        <Route path='/detail_club' element={<Main children={<Detail_club/>} />} />

      </Routes>
    </>
  );
}

export default App;
