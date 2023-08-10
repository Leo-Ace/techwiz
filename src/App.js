import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Detail_member2 from './components/pages/Detail/Detail_member2';
import Detail_player from './components/pages/Detail/Detail.player';
import About from './components/pages/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/Detail_player' element={<Main children={<Detail_player />} />} />
        <Route path='/Detail_member_2' element={<Main children={<Detail_member2/>} />} />
        <Route path='/about' element={<Main children={<About />} />} />

      </Routes>
    </>
  );
}

export default App;
