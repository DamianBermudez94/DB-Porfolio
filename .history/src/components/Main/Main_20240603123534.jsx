import { Contact } from "../Contacto/Contact";
import { Proyectos } from "../Proyectos/Proyectos";
import { Service } from "../Servicios/Service";
import { Conocimientos } from "../Conocimientos/Conocimientos";
import { Home } from "../Home/Home";

export function Main() {
  return (
    <main>
      <Home />
      <Proyectos />
      <Service />
      <Conocimientos/>
      <Contact />
    </main>
  );
}
