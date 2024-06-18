import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation } from "react-router-dom";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);

  };

  const handleSetActive = (to) => {
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
        <li>
          <NavHashLink
            to="#inicio"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}            
          
          >
            Inicio
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#sobre-mi"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
          
          >
            Sobre mi
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#proyectos"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
        
          >
            Porfolio
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#servicios"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
          
          >
            Servicios
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#conocimientos"
            smooth={true} 
            duration={500} 
            onSetActive={handleSetActive}
           
          >
            Conocimientos
          </NavHashLink>
        </li>
        <li>
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
