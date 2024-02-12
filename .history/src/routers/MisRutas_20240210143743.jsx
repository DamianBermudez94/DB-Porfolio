import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Servicios } from "../pages/Servicios";
import { Conocimientos } from "../pages/Conocimientos";
import { Contacto } from "../pages/Contacto";
import { Proyectos } from "../pages/Proyecto";
import { Error } from "../components/Error";
import "./style.css";

export const MisRutas = () => {
  return (
    <div className="container-rutas">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/conocimientos" element={<Conocimientos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyecto/" element={<Proyectos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
