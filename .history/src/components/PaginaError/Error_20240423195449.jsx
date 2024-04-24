import { NavLink } from "react-router-dom";
import  "./styles.css"
export const Error = () => {
  return (
    <div className="content-error">
      <h1>Error( 404 )pagina no encontrada</h1>
      <NavLink className="enlace-contacto animated-button">Volver al inicio</NavLink>
    </div>
  );
};
