import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import CustomText from "../TextoCustom/CustomText";

import imagen from "../../../public/image/Developer.png";
import "./styles.css";
export const Home = () => {
  const words = [
    "Hola,Soy Damian Bermudez",
    "Developer Web Full Stack",
    "Diseñador Web",
  ];
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
            <figure>
              <img
                src={"/image/profile-damianbermudez.png"}
                alt="Damian Bermudez desarrollador web"
              ></img>
            </figure>

            <CustomText words={words} />
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
            
              <img
                src={imagen}
                alt="Developer Web Full Stack - Desarrollador Web Full stack - Paginas Web"
              />
           
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

          <NavLink className="enlace-contacto animated-button" to="/contacto">
            <span>¡Demos vida a tu idea!</span>
            <span></span>
          </NavLink>
        </animated.div>
      </section>

      <section className="article-section__motivos">
        <h2>¿Por qué elegirme?</h2>
        <article>
          <h3>Experiencia</h3>
          <p>
            Como desarrollador web full stack y diseñador web, puede ofrecer
            soluciones completas para tus proyectos. Desde el diseño inicial
            hasta la implementación técnica, además total transparencia a la
            hora de informar, desde el precio hasta el tiempo de entrega.
          </p>
        </article>
        <article>
          <h3>Creatividad</h3>
          <p>
            Como diseñador web transformo ideas en experiencias visuales
            cautivadoras. Desde el concepto inicial hasta la implementación,
            cada detalle cuenta. Tu sitio web no solo será funcional, sino
            también estéticamente atractivo y alineado con tu visión.
          </p>
        </article>
        <article>
          <h3>Flexibilidad</h3>
          <p>
            En un entorno dinámico donde la mutabilidad es la constante, contar
            con una figura versátil como la de ellos asegura que tu proyecto
            esté preparado para afrontar cualquier eventualidad. Se asemejan a
            ese confidente de confianza que siempre tiene un recurso alternativo
            disponible, si bien en este caso, en el ámbito digital.
          </p>
        </article>
      </section>
    </>
  );
};
