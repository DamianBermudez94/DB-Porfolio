
import { NavHashLink} from "react-router-hash-link";
import PropTypes from "prop-types";
import "./styles.css";
export const ButtonInformacion = ({ text }) => {
  return (
    <div className="content-button">
      <NavHashLink className="enlace-contacto animated-button" to="#contacto">
        <span>{text}</span>
        <span></span>
       
      </NavHashLink>
    </div>
  );
};
ButtonInformacion.propTypes = {
  text: PropTypes.string.isRequired, // Validamos que 'text' sea una cadena y sea requerido
};
