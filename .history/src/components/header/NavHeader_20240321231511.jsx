import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/inicio">
            <img
              src={"/image/Logo-DB.png"}
              alt="Damian Bermudez desarrollador web"
            ></img>
          </NavLink>
        </div>

        <BurguerButton
          className="btn-menu"
          clicked={clicked}
          handleClick={handleClick}
        />
        <nav>
          <ul className={`menu ${clicked ? "active" : ""}`}>
            <li>
              <NavLink
                to="/inicio"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyecto"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/conocimientos"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                conocimientos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
