import { useState, useEffect } from "react";
import { gsap } from 'gsap';
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import imagen from "../../../public/image/profile-pic.png";
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
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

    tl.to("#scramble", { duration: 3, scrambleText: { text: "Damian Bermudez.", chars: "lowerCase", revealDelay: 0.5, tweenLength: false } })
      .to("#charsCustom", { duration: 4, scrambleText: { text: "Developer Web Full Stack", chars: "XO", revealDelay: 1, tweenLength: false, speed: 0.4 } })
      .to("#charsNumbers", { duration: 4, scrambleText: { text: "Diseñador Web", chars: "0123456789" } });

    // Inicializar GSDevTools
    gsap.create({ animation: tl, minimal: true });

    // Limpieza cuando el componente se desmonta
    return () => {
      tl.kill(); // Detiene las animaciones
     
    };
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
                <div className="demo">
                  <div id="textblock">
                    <div id="scramble"></div>
                    <span id="charsCustom"></span>
                    <span id="charsNumbers"></span>
                    <span id="charsUppercase"></span>
                    <span id="charsLowercase"></span>
                    <div id="newClass"></div>
                  </div>
                </div>
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
          </div>
          <ButtonFlotante />
        </animated.div>
      </section>
      <section className="section-me" style={contentAnimation}>
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
