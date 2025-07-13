import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuienSoy from "../pages/QuienSoy";
import MisProyectos from "../pages/MisProyectos";
import Certificados from "../pages/Certificados";

function RoutesPage() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/QuienSoy" element={<QuienSoy/>}></Route>
      <Route path="/MisProyectos" element={<MisProyectos/>}></Route>
      <Route path="/Certificados" element={<Certificados/>}></Route>

    </Routes>
  );
}

export default RoutesPage;
