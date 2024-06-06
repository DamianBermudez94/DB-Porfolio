import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.hash);
  }, [location.hash]);
  const handleClick = (hash) => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
    setActiveLink(hash);
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
            onClick={() => handleClick('#inicio')}
            className={activeLink === '#inicio' ? 'active' : ''}
          >
            Inicio
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#sobre-mi"
            onClick={() => handleClick('#sobre-mi')}
            className={activeLink === '#sobre-mi' ? 'active' : ''}
          >
            Sobre mi
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#proyectos"
            onClick={() => handleClick('#proyectos')}
            className={activeLink === '#proyectos' ? 'active' : ''}
          >
            Porfolio
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#servicios"
            onClick={() => handleClick('#servicios')}
            className={activeLink === '#servicios' ? 'active' : ''}
          >
            Servicios
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#conocimientos"
            onClick={() => handleClick('#conocimientos')}
            className={activeLink === '#conocimientos' ? 'active' : ''}
          >
            Conocimientos
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#contacto"
            onClick={() => handleClick('#contacto')}
            className={activeLink === '#contacto' ? 'active' : ''}
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
