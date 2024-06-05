import {Contact} from "../Contacto/Contact";
import { Proyectos } from "../Proyectos/Proyectos";
import {Service} from "../Servicios/Service";
import Nosotros from "../Nosotros/Nosotros";
import Inicio from "../Home/Home";
import WhatsappButton from "../bottonWhatsApp/buttonWhatsApp";
export function Main() {

  return (
    <main>
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Service />
      <Contact/>
      <WhatsappButton/>
    </main>
  );
}