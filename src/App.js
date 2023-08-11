import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main children={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
