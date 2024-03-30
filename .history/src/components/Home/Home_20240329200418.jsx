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

  // Definimos la animación usando useSpring
  const contentAnimation = useSpring({
    opacity: showContent ? 1 : 0, // Mostrar contenido cuando showContent sea true
    transform: showContent ? "translateY(0px)" : "translateY(-100px)", // Animación de desplazamiento hacia arriba
    from: { opacity: 0, transform: "translateY(-100px)" }, // Estilo inicial
    delay: 500, // Retraso de la animación
  });
  return (
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
      <section className="section-me" style={contentAnimation}>
        <h2 className="title-sobre__me">Sobre mi</h2>
        <span className="sub-title">Sobre mi</span>
        <animated.div
          className="container-me"
          data-animation="diagonal"
          style={contentAnimation}
        >
          <figure>
            <img
              src={imagen}
              alt="Developer Web Full Stack - Desarrollador Web Full stack - Paginas Web"
            />
          </figure>
          <ul>
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Developer Web Full Stack</strong> en busca de nuevas
                oportunidades y poder seguir creciendo profecionalmente.LLevo
                más de dos años y medio estudiando/perfeccionandome en las
                tecnologías más demandadas del mercado.
              </p>
            </li>
            <li>
              <span>💼</span>
              <p>
                Mi portafolio incluye proyectos web de diversa envergadura.
                Desde la creación de sitios web responsive hasta la optimización
                del rendimiento y la implementación de características
                interactivas, me enorgullezco de resolver problemas técnicos de
                manera efectiva
              </p>
            </li>
          </ul>
          <NavLink className="enlace-contacto animated-button" to="/contacto">
            <span>¡Demos vida a tu idea!</span>
            <span></span>
          </NavLink>
        </animated.div>
      </section>

      <section className="article-section__motivos">
        <h2>¿Por qué elegirme?</h2>
        <article>
          <h3>1. Experiencia integral</h3>
          <p>
            Como desarrollador web full stack y diseñador web, puedo ofrecer
            soluciones completas para tus proyectos. Desde el diseño inicial
            hasta la implementación técnica, estoy equipado para abordar todas
            las facetas de tu presencia en línea.
          </p>
        </article>
        <article>
          <h3>2. Creatividad y funcionalidad</h3>
          <p>
            Me enorgullece combinar habilidades creativas con un sólido
            conocimiento técnico. Esto significa que no solo obtendrás un diseño
            visualmente atractivo, sino también una funcionalidad impecable que
            garantiza una experiencia de usuario excepcional.
          </p>
        </article>
        <article>
          <h3>3. Compromiso con tu éxito</h3>
          <p>
            Estoy comprometido a trabajar estrechamente contigo para comprender
            tus objetivos y hacer que tu visión cobre vida. Mi objetivo es
            superar tus expectativas y proporcionarte resultados que impulsen el
            crecimiento y el éxito de tu negocio en línea.
          </p>
        </article>
      </section>
    </section>
  );
};
