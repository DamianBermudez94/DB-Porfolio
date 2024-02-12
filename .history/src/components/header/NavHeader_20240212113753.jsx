import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./NavHeader.css";
import BurguerButton from "./burgerButton";


export const NavHeader = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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
        <nav className={`links ${clicked ? "active" : ""}`}>
        {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
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
                      </Nav.Item>
                    );
                  })}
        </nav>
      </div>
    </header>
  );
};
