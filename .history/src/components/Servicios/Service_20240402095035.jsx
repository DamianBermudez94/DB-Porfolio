import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css";
export const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const revealThreshold = 100; // Ajusta este valor según sea necesario

    if (scrollY > revealThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="section-servicios" id="mis-servicios">
      <h1 className="title-servicios">Servicios</h1>
      <span className="sub-title__servicios">Servicios</span>
      <div className="container-card_servicios">
        <article
          className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}
        >
          <div className="card-details">
            <img src="/image/front-end.png" alt="Front end - Developer Web" />
            <h3 className="text-title">Front-end</h3>
            <ul>
              <li>
                <p> 1-Diseño de interfaces de usuario modernas y atractivas que se
              adapten a las últimas tendencias de diseño web y a las necesidades
              del cliente.</p>
              </li>
              <li>
                <p>2-Desarrollo de experiencias de usuario intuitivas y
              fluidas mediante el uso de tecnologías como HTML5, CSS3 y
              JavaScript, asegurando una navegación fácil y agradable.</p>
              </li>
              <li>
                <p> 3-Optimización para dispositivos móviles y diferentes tamaños de
              pantalla, garantizando que el sitio sea accesible y funcional en
              cualquier dispositivo.</p>
              </li>
              <li>
                <p> 4-Implementación de animaciones y efectos
              interactivos para mejorar la interactividad y el atractivo visual
              del sitio.</p>
              </li>
              <li>
                <p>  5-Integración de frameworks y librerías front-end como
              React para desarrollar aplicaciones web robustas y de alto
              rendimiento.</p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}
        >
          <div className="card-details">
            <img src="/image/back-end.png" alt="Back end - Developer Web" />
            <h3 className="text-title">Back-end</h3>
            <ul>
              <li>
                <p>Desarrollo de arquitecturas backend escalables y seguras utilizando tecnologías como Node.js, Express, según las necesidades del proyecto.</p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>

        <article
          className={`card  scroll-reveal-izquierda ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img src="/image/web-design.png" alt="Web design - diseño web" />
            <h3 className="text-title">Diseño Web</h3>
            <ul>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-derecha ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img
              src="/image/landing-page.png"
              alt="landing page - paginas de aterrizaje"
            />
            <h3 className="text-title">Landin page</h3>
            <ul>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-derecha ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img
              src="/image/e-commerce-service.png"
              alt="E-Commerce - Tienda online"
            />
            <h3 className="text-title">E-Commerce</h3>
            <ul>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-izquierda ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img src="/image/web-site.png" alt="E-Commerce - Tienda online" />
            <h3 className="text-title">Sitios Web</h3>
            <ul>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
      </div>
    </section>
  );
};
