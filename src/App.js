import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detail_player from './components/pages/Detail/Detail.player';
import About from './components/pages/About/About';
import DetailClub from './components/pages/Detail_club/Detail_club';
import Squad from './components/pages/squad/Squad';
import Match from './components/pages/MatchDetail/Match';
import Detail_club from './components/pages/Detail_club/Detail_club';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='player/Detail_player' element={<Main children={<Detail_player />} />} />
        <Route path='/team-table' element={<Main children={<Squad/>} />} />
        <Route path='/home/match' element={<Main children={<Match/>} />} />
        <Route path='/about' element={<Main children={<About />} />} />
        <Route path='/club/:name/:id' element={<Main children={<DetailClub/>} />} />
      </Routes>
    </>
  );
}

export default App;
