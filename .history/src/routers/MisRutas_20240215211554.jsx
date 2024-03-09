import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Inicio } from "../pages/Inicio";
import { Servicios } from "../pages/Servicios";
import { Conocimientos } from "../pages/AcerdaDe";
import { Contacto } from "../pages/contacto";
import { Proyectos } from "../pages/Proyecto";
import { Error } from "../components/Error";
import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";

export const MisRutas = () => {
  return (
    <div className="container-rutas">
      <BrowserRouter>
        {/*Header y navegacion*/}
        <NavHeader />
        {/*Contenido general*/}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/conocimientos" element={<Conocimientos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyecto/" element={<Proyectos />} />
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Footer*/}
        <Footer />
      </BrowserRouter>
    </div>
  );
};
