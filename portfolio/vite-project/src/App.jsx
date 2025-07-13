import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuienSoy from './pages/QuienSoy';
import Navbar2 from './components/Navbar2';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import MisProyectos from './pages/MisProyectos';

function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/QuienSoy" element={<QuienSoy />} />
        <Route path="/MisProyectos" element={<MisProyectos />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
