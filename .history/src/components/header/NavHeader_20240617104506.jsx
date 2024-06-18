import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";


import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {

  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);


  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);

  };

  const handleSetActive = (to) => {
    console.log("hola",to);
    setActive(to);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let found = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0 && !found) {
        setActive(section.id);
        found = true;
      }
    });

    if (!found) {
      setActive('');
    }
  };
  useEffect(() => {
    

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
          smooth
          to="#inicio"
          onClick={() => handleSetActive('inicio')}          
          
          >
            Inicio
          </NavHashLink>
        </li>
        <li className={active === 'sobre-mi' ? 'activo' : ''}>
          <NavHashLink
            smooth
            to="#sobre-mi"
            onClick={() => handleSetActive('sobre-mi')}   
         
          
          >
            Sobre mi
          </NavHashLink>
        </li>
        <li className={active === 'proyectos' ? 'activo' : ''}>
          <NavHashLink
            smooth
            to="#proyectos"
            onClick={() => handleSetActive('proyectos')}   
        
          >
            Porfolio
          </NavHashLink>
        </li>
        <li className={active === 'servicios' ? 'activo' : ''}>
          <NavHashLink
          smooth
          to="#servicios"
          onClick={() => handleSetActive('servicios')}   
          >
            Servicios
          </NavHashLink>
        </li>
        <li className={active === 'conocimientos' ? 'activo' : ''}>
          <NavHashLink
          smooth
          to="#conocimientos"
          onClick={() => handleSetActive('conocimientos')}   
           
          >
            Conocimientos
          </NavHashLink>
        </li>
        <li className={active === 'contacto' ? 'activo' : ''}>
          <NavHashLink
           smooth
           to="#contacto"
           onClick={() => handleSetActive('contacto')}   
         
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
