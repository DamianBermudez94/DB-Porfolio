import Contacto from "../Contacto/Contacto";
import { Producto } from "../Producto/Producto";
import Servicios from "../Servicios/Servicios";
import Nosotros from "../Nosotros/Nosotros";
import Inicio from "../Home/Home";
import WhatsappButton from "../bottonWhatsApp/buttonWhatsApp";
export function Main() {

  return (
    <main>
      <Inicio />
      <Nosotros />
      <Producto />
      <Servicios />
      <Contacto/>
      <WhatsappButton/>
    </main>
  );
}