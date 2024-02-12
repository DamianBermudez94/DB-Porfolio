import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppContext } from "../appContext";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";

function ThemeToggle() {
  const { theme, toggleTheme, closeExpanded } = useAppContext();

  return (
    <div onClick={closeExpanded}>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>
        {theme === "light" ? (
          <Icon icon="game-icons:sunflower" />
        ) : (
          <Icon icon="game-icons:moon" />
        )}
      </div>
    </div>
  );
}

export const NavHeader = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
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

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener en el desmontaje del componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
      { id: "2R", name: "All Projects", route: "/All-Projects" },
    ],
    to: [
      { id: "1T", name: "Home", to: "Home" },
      { id: "2T", name: "About Me", to: "About" },
      { id: "3T", name: "Skills", to: "Skills" },
      { id: "4T", name: "Projects", to: "Projects" },
      { id: "5T", name: "Contact", to: "Contact" },
    ],
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} >
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
        <nav  className="me-auto">
        {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <ul key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </ul>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <ul key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </ul>
                    );
                  })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
