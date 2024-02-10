import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa

    setClicked(!clicked);
  };
  return (
    <header className="header">
        <div className="nav-content">
      <div className="logo">
        <NavLink to="/inicio">
          <img
            src={"/image/LogoDamiRoboto.png"}
            alt="Damian Bermudez desarrollador web"
          ></img>
        </NavLink>
      </div>

      <BurguerButton
        className="btn-menu"
        clicked={clicked}
        handleClick={handleClick}
      />
      <nav className={`links ${clicked ? "active" : ""}`}>
        <ul>
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
