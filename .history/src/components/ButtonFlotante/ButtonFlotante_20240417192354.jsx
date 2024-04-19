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
      Ir hacia abajo
    </button>
  );
};

export default ButtonFlotante;
