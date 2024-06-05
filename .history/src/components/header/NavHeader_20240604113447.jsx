import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
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
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#acerda"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sobre mi
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#proyectos"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Porfolio
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#servicios"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                servicios
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#conocimientos"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                conocimientos
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#contacto"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                contacto
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
