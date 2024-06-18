import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { Link, animateScroll as scroll } from 'react-scroll';

import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {

  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);


  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);

  };

  const handleSetActive = (to) => {
    console.log(to);
    setActive(to);
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
        <li className={active === 'inicio' ? 'activo' : ''}>
          <NavHashLink
            to="#inicio"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}            
          
          >
            Inicio
          </NavHashLink>
        </li>
        <li className={active === 'sobre-mi' ? 'activo' : ''}>
          <NavHashLink
            to="#sobre-mi"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
          
          >
            Sobre mi
          </NavHashLink>
        </li>
        <li className={active === 'proyectos' ? 'activo' : ''}>
          <NavHashLink
            to="#proyectos"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
        
          >
            Porfolio
          </NavHashLink>
        </li>
        <li className={active === 'servicios' ? 'activo' : ''}>
          <NavHashLink
            to="#servicios"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
          
          >
            Servicios
          </NavHashLink>
        </li>
        <li className={active === 'conocimientos' ? 'activo' : ''}>
          <NavHashLink
            to="#conocimientos"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
           
          >
            Conocimientos
          </NavHashLink>
        </li>
        <li className={active === 'contacto' ? 'activo' : ''}>
          <NavHashLink
            to="#contacto"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
         
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
