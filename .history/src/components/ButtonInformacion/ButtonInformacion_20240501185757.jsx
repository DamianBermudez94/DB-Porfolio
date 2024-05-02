import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";
export const ButtonInformacion = ({ text }) => {
  return (
    <div className="content-button">
      <NavLink className="enlace-contacto animated-button" to="/contacto">
        <span>{text}</span>
        <span>!</span>
      </NavLink>
    </div>
  );
};
ButtonInformacion.propTypes = {
  text: PropTypes.string.isRequired, // Validamos que 'text' sea una cadena y sea requerido
};
