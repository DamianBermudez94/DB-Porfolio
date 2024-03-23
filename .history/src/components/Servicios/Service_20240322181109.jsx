import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css";
export const Service = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY);
    const revealThreshold = 100 // Ajusta este valor según sea necesario

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
    <section
      className="section-servicios"
      id="mis-servicios"
    >
      <h1 className="title-servicios">Mis Servicios</h1>
      <span className="sub-title__servicios">Servicios</span>
      <div className="container-card_servicios">
      <article className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img src="/image/front-end.png" alt="Front end - Developer Web" />
            <h3 className="text-title">Front-end</h3>
            <p className="text-body">
              {" "}
              Creo interfaces de usuario que no solo son atractivas, sino
              también altamente funcionales. Utilizo las últimas tecnologías y
              prácticas de desarrollo para asegurarme de que tu sitio web no
              solo se vea bien en todos los dispositivos, sino que también
              ofrezca una experiencia de usuario excepcional.
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>
        <article className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img src="/image/back-end.png" alt="Back end - Developer Web" />
            <h3 className="text-title">Back-end</h3>
            <p className="text-body">
              {" "}
              <p>
                La funcionalidad es la columna vertebral de cualquier sitio web.
                Con experiencia en el desarrollo de back-end, construyo la
                infraestructura necesaria para que tu sitio funcione de manera
                eficiente y sin problemas. Base de datos, lógica de negocios y
                seguridad, todo en conjunto.
              </p>
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>

        <article className={`card  scroll-reveal-izquierda ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img src="/image/web-design.png" alt="Web design - diseño web" />
            <h3 className="text-title">Diseño Web</h3>
            <p className="text-body">
              {" "}
              Transformo ideas en experiencias visuales cautivadoras. Desde el
              concepto inicial hasta la implementación, cada detalle cuenta. Tu
              sitio web no solo será funcional, sino también estéticamente
              atractivo y alineado con tu visión.
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>
        <article className={`card  scroll-reveal-izquierda ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img
              src="/image/landing-page.png"
              alt="landing page - paginas de aterrizaje"
            />
            <h3 className="text-title">Landin page</h3>
            <p className="text-body">
              {" "}
              Desarrollo landing pages que convierten visitantes en clientes.
              Optimizo la estructura y el contenido para maximizar la
              participación, asegurando que cada visita sea una oportunidad para
              impulsar tus objetivos de conversión.
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>
        <article className={`card  scroll-reveal-izquierda ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img
              src="/image/e-commerce-service.png"
              alt="E-Commerce - Tienda online"
            />
            <h3 className="text-title">E-Commerce</h3>
            <p className="text-body">
              {" "}
              Construyo plataformas de comercio electrónico robustas y fáciles
              de usar. Desde la presentación visual de productos hasta la
              experiencia de compra fluida, cada aspecto se diseña pensando en
              la satisfacción del usuario y el crecimiento de tu negocio en
              línea.
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>
        <article className={`card  scroll-reveal-izquierda ${isVisible ? "visible" : ""}`}>
          <div className="card-details">
            <img
              src="/image/web-site.png"
              alt="E-Commerce - Tienda online"
            />
            <h3 className="text-title">Sitios Web</h3>
            <p className="text-body">
              {" "}
              Construyo plataformas de comercio electrónico robustas y fáciles
              de usar. Desde la presentación visual de productos hasta la
              experiencia de compra fluida, cada aspecto se diseña pensando en
              la satisfacción del usuario y el crecimiento de tu negocio en
              línea.
            </p>
          </div>
          <NavLink className="card-button" to="/contacto">
            Más info
          </NavLink>
        </article>
      </div>
    </section>
  );
};
