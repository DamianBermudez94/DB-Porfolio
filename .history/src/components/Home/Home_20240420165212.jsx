import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import imagen from "../../../public/image/Developer.png";
import { Service } from "../Servicios/Service";
import ButtonFlotante from "../ButtonFlotante/ButtonFlotante";
import { ButtonInformacion } from "../ButtonInformacion/ButtonInformacion";
import "./styles.css";

export const Home = () => {
  const [showContent, setShowContent] = useState(false);
  // Utilizamos useEffect para activar la animación cuando el componente se monta
  useEffect(() => {
    setShowContent(true);
  }, []);

  // Solo se ejecuta una vez cuando el componente se monta

  // Definimos la animación usando useSpring
  const contentAnimation = useSpring({
    opacity: showContent ? 1 : 0, // Mostrar contenido cuando showContent sea true
    transform: showContent ? "translateY(0px)" : "translateY(-100px)", // Animación de desplazamiento hacia arriba
    from: { opacity: 0, transform: "translateY(-100px)" }, // Estilo inicial
    delay: 500, // Retraso de la animación
  });
  return (
    <>
      <section className="home">
        <animated.div className="home-welcome" style={contentAnimation}>
          <div className="container-home">
            <div className="content">
              <div className="content-title__principal">
                <strong>¡Bienvenidos!</strong>
                <b>
                  <h1 className="innerIam">
                    Me llamo
                    <br />
                    Damián Bermúdez
                    <br />
                    Developer Web Full Stack,
                    <br />
                    Diseñador Web
                    <br />
                  </h1>
                </b>
              </div>
              <div className="container-redes_inicio">
                <NavLink
                  to="https://www.linkedin.com/in/damian-bermudez-4a4a33204/"
                  className="link-redes_sociales"
                  target="_blank"
                >
                  <i className="fab fa-linkedin linkedin"></i>
                </NavLink>
                <NavLink
                  to="https://github.com/DamianBermudez94"
                  className="link-redes_sociales"
                  target="_blank"
                >
                  <i className="fab fa-github-square github"></i>
                </NavLink>
                <a
                  className="btn-cv"
                  href="./cv-pdf/CVDamianBermudez2023_1_ (1).pdf"
                  download="CV-damian-bermudez.pdf"
                >
                  CV
                </a>
              </div>
            </div>
            <LazyLoad className="lazy-load" height={200} offset={100}>
              <img
                src={"/image/profile-pic.png"}
                alt="Damian Bermudez desarrollador web"
              ></img>
            </LazyLoad>
          </div>
          <ButtonFlotante />
        </animated.div>
      </section>
      <section className="section-me" style={contentAnimation}>
        <div className="custom-shape-divider-top-1713642448">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="content-title">
          <h2 className="title-sobre__me">Sobre mi</h2>
          <span className="sub-title">Sobre mi</span>
        </div>
        <animated.div
          className="container-me"
          data-animation="diagonal"
          style={contentAnimation}
        >
          <article>
            <LazyLoad height={200} offset={100}>
              <img
                src={imagen}
                alt="Developer Web Full Stack - Desarrollador Web Full stack - Paginas Web"
              />
            </LazyLoad>
            <p>
              ¡Hola! Soy un apasionado{" "}
              <strong>Desarrollador Web Full Stack y Diseñador Web</strong> en
              búsqueda de nuevas oportunidades para seguir expandiendo mis
              horizontes profesionales. Con más de dos años y medio dedicados a
              perfeccionarme en las tecnologías más demandadas del mercado,
              estoy listo para ofrecer soluciones innovadoras y de alta calidad
              para tus proyectos. Mi portafolio incluye proyectos web de diversa
              envergadura. Desde la creación de sitios web responsive hasta la
              optimización del rendimiento y la implementación de
              características interactivas, me enorgullezco de resolver
              problemas técnicos de manera efectiva
            </p>
          </article>
          <ButtonInformacion text="¡Demos vida a tu idea!" />
        </animated.div>
      </section>
      <section>
        <Service />
      </section>
    </>
  );
};
