import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuienSoy from './pages/QuienSoy';
import Navbar2 from './components/Navbar2';
import HomePage from './pages/HomePage';
import PaginaError404 from './pages/PaginaError404';

function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PaginaError404 />} />
        <Route path="/QuienSoy" element={<QuienSoy />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
