import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
        <Route path='/login' element={<Main children={<Login/>} />}/>
        <Route path='/register' element={<Main children={<Register/>} />}/>
      </Routes>
    </>
  );
}

export default App;
