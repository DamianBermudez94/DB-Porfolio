import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../components/Home/Home";
import { Service } from "../components/Servicios/Service";
import { Proyectos } from "../pages/Proyecto";
import { Conocimientos } from "../components/Conocimientos/Conocimientos";
import { Contact } from "../components/Contacto/Contact";
export const Layout = () => {
  return (
    <div>
      <NavHeader />
      <main>
        <Home />
        <Proyectos/>
        <Service/>
        <Conocimientos/>
        <Contact/>

      </main>
      <Footer />
    </div>
  );
};
