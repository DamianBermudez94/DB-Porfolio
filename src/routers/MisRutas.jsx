import {Routes, Route } from "react-router-dom";

import { Inicio } from "../pages/Inicio";
/*import { Servicios } from "../pages/Servicios";*/
import { AcerdaDe } from "../pages/AcerdaDe";
import { Contacto } from "../pages/contacto";
import { Proyectos } from "../pages/Proyecto";
import { Error } from "../components/Error";
import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";

export const MisRutas = () => {
  return (
    <div className="layout">
      {/*Header y navegacion*/}
      <NavHeader />
      {/*Contenido general*/}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/conocimientos" element={<AcerdaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyecto" element={<Proyectos />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Footer*/}
      <Footer />
    </div>
  );
};
