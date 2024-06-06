import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener en el desmontaje del componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="logo">
          <HashLink to="#inicio">
            <img
              src={"/image/nuevoLogo-DB3.png"}
              alt="Damian Bermudez desarrollador web"
            ></img>
          </HashLink>
        </div>
        <BurguerButton
          className="btn-menu"
          clicked={clicked}
          handleClick={handleClick}
        />
        <nav className={`menu ${clicked ? "active" : ""}`}>
          <ul>
            <li>
              <NavHashLink
                to="#inicio"
                onClick={handleClick}
                className={location.hash === "#inicio" ? "" : ""}
              >
                Inicio
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#sobre-mi"
                onClick={handleClick}
                className={location.hash === "#sobre-mi" ? "" : ""}
              >
                Sobre mi
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#proyectos"
                onClick={handleClick}
                className={location.hash === "#proyectos" ? "" : ""}
              >
                Porfolio
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#servicios"
                onClick={handleClick}
                className={location.hash === "#servicios" ? "active" : ""}
              >
                Servicios
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#conocimientos"
                onClick={handleClick}
                className={location.hash === "#conocimientos" ? "active" : ""}
              >
                Conocimientos
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#contacto"
                onClick={handleClick}
                className={location.hash === "#contacto" ? "active" : ""}
              >
                Contacto
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
