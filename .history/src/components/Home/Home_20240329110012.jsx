import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { ListadoTrabajos } from "../Proyectos/ListaTrabajos";
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
              Descargar mi CV
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
              <span>👨‍💻</span>
              <p>
                Soy <strong>Developer Web Full Stack</strong> en busca de nuevas
                oportunidades y poder seguir creciendo profecionalmente.LLevo
                más de dos años y medio estudiando/perfeccionandome en las
                tecnologías más demandadas del mercado.
              </p>
            </li>
            <li>
              <span>🖥️</span>
              <p>
                Mi conjunto de habilidades abarca tanto el desarrollo front-end
                como el back-end de aplicaciones web. Trabajo con tecnologías
                como HTML, CSS, JavaScript, y TypeScript, así como con
                frameworks como React, Node.js y Express. También tengo
                experiencia en la gestión de bases de datos SQL y NoSQL.
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
            <span>Hover me</span>
            <span></span>
          </NavLink>
        </animated.div>
      </section>
      <section className="content-proyectos__inicio">
        <h2>Estos son algunos de mis proyectos como desarrollador web</h2>
        <ListadoTrabajos limite="2" />
      </section>
    </section>
  );
};
