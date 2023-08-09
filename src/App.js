import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/about' element={<Main children={<About />} />} />
      </Routes>
    </>
  );
}

export default App;
