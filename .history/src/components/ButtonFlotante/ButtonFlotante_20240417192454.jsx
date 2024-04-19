import LazyLoad from "react-lazyload";
import "./styles.css"; // Estilo del botón
import icon from "../../../public/image/icon-abajo.svg"
const ButtonFlotante = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className="floating-button" onClick={scrollDown}>
      <LazyLoad>
        <img src={icon} alt="" />
      </LazyLoad>
    </button>
  );
};

export default ButtonFlotante;
