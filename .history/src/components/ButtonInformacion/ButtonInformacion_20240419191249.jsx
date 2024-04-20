import { NavLink } from "react-router-dom";
import "./styles.css"
export const ButtonInformacion = ({text}) => {
  return (
    <div>
      <NavLink className="enlace-contacto animated-button" to="/contacto">
        <span>{text}</span>
        <span></span>
      </NavLink>
    </div>
  );
};
