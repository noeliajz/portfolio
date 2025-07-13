// App.jsx
import { BrowserRouter } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import RoutesPage from './routes/RoutesPage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
