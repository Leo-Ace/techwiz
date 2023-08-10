import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detail_player from './components/pages/Detail/player/Detail.player';
import About from './components/pages/About/About';
import Squad from './components/pages/squad/Squad';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='player/Detail_player' element={<Main children={<Detail_player />} />} />
        <Route path='/Spad' element={<Main children={<Squad/>} />} />
        <Route path='/about' element={<Main children={<About />} />} />
        <Route path='/detail_club' element={<Main children={<Detail_club/>} />} />

      </Routes>
    </>
  );
}

export default App;
