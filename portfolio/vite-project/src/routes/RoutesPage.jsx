import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PaginaError404 from "../pages/PaginaError404";
import QuienSoy from "../pages/QuienSoy";


function RoutesPage() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PaginaError404 />} />
      <Route path="/QuienSoy" element={<QuienSoy/>}></Route>
    </Routes>
  );
}

export default RoutesPage;
