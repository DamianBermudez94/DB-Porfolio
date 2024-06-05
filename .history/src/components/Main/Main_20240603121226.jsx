import {Contact} from "../Contacto/Contact";
import { Proyectos } from "../Proyectos/Proyectos";
import Servicios from "../Servicios/Servicios";
import Nosotros from "../Nosotros/Nosotros";
import Inicio from "../Home/Home";
import WhatsappButton from "../bottonWhatsApp/buttonWhatsApp";
export function Main() {

  return (
    <main>
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Servicios />
      <Contact/>
      <WhatsappButton/>
    </main>
  );
}