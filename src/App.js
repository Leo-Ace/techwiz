import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/contact' element={<Main children={<Contact />} />} />
      </Routes>
    </>
  );
}

export default App;
