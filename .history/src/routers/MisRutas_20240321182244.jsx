import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { Inicio } from "../pages/Inicio";
import { Servicios } from "../pages/Servicios";
import { AcerdaDe } from "../pages/AcerdaDe";
import { Contacto } from "../pages/contacto";
import { Proyectos } from "../pages/Proyecto";
import { Error } from "../components/Error";
import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";

export const MisRutas = () => {
  return (
    <div className="container-rutas">
      <Router>
        {/*Header y navegacion*/}
        <Suspense fallback={<div>Cargando...</div>}></Suspense>
        <NavHeader />
        {/*Contenido general*/}
        <Switch>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/conocimientos" element={<AcerdaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyecto" element={<Proyectos />} />
          <Route path="*" element={<Error />} />
        </Switch>

        {/* Footer*/}
        <Footer />
      </Router>
    </div>
  );
};
