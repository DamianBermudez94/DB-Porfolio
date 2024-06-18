import { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

export const NavHeader = () => {
  //Estado para abrir y cerrar el menu hamburguesa
  const [clicked, setClicked] = useState(false);

  // Estado para indicar en que opción del menú/sección de la pagina
  // nos encontramos
  const [active, setActive] = useState("inicio");

  // Estado para manejar el efecto de cambiar de color de la barra
  // de navegación
  const [scrolled, setScrolled] = useState(false);

  // Función para abrir y cerrar el menu hamburguesa
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  // Función para manejar los rutas de
  const handleSetActive = (to) => {
    console.log("hola", to);
    setActive(to);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let found = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0 && !found) {
        setActive(section.id);
        found = true;
      }
    });

    if (!found) {
      setActive("");
    }

    // condicional para manejar altura de la pagina
    // para inidcarle al header cuando ocultarse/mostrarse
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
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
            <li className={active === "inicio" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#inicio"
                onClick={() => setActive("inicio")}
              >
                Inicio
              </NavHashLink>
            </li>
            <li className={active === "sobre-mi" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#sobre-mi"
                onClick={() => setActive("sobre-mi")}
              >
                Sobre mi
              </NavHashLink>
            </li>
            <li className={active === "proyectos" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#proyectos"
                onClick={() => setActive("proyectos")}
              >
                Porfolio
              </NavHashLink>
            </li>
            <li className={active === "servicios" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#servicios"
                onClick={() => setActive("servicios")}
              >
                Servicios
              </NavHashLink>
            </li>
            <li className={active === "conocimientos" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#conocimientos"
                onClick={() => setActive("conocimientos")}
              >
                Conocimientos
              </NavHashLink>
            </li>
            <li className={active === "contacto" ? "activo" : ""}>
              <NavHashLink
                smooth
                to="#contacto"
                onClick={() => setActive("contacto")}
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
