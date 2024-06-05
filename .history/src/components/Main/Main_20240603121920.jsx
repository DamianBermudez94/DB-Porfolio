import {Contact} from "../Contacto/Contact";
import { Proyectos } from "../Proyectos/Proyectos";
import {Service} from "../Servicios/Service";

import {Home} from "../Home/Home";

export function Main() {

  return (
    <main>
      <Home />
  
      <Proyectos />
      <Service />
      <Contact/>

    </main>
  );
}