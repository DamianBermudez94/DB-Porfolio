import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Inicio } from "../pages/Inicio";
import { Servicios } from "../pages/Servicios";
import { AcerdaDe } from "../pages/AcerdaDe";
import { Contacto } from "../pages/contacto";
import { Proyectos } from "../pages/Proyecto";
import { Error } from "../components/Error";



export const MisRutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/conocimientos" element={<AcerdaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyecto" element={<Proyectos />} />
        <Route path="*" element={<Error />} />
      </Routes>

    
    </BrowserRouter>
  );
};
