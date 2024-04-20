import { NavLink } from "react-router-dom";

export const ButtonInformacion = () => {
  return (
    <div>
      <NavLink className="enlace-contacto animated-button" to="/contacto">
        <span>¡Demos vida a tu idea!</span>
        <span></span>
      </NavLink>
    </div>
  );
};
