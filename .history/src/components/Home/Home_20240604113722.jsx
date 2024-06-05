import { useState, useEffect } from "react";
import TextScramble from "@skits/react-text-scramble";

import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import ButtonFlotante from "../ButtonFlotante/ButtonFlotante";

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
    from: { opacity: 0, transform: "translateX(-100px)" }, // Estilo inicial
    delay: 500, // Retraso de la animación
  });

  return (
    <>
      <section className="home" id="inicio">
        <animated.div className="home-welcome" style={contentAnimation}>
          <div className="content-title__principal">
            <TextScramble
              text="Hola, Soy Damián Bermúdez"
              autostart
              wrappingElement="h1" // Wraps the provided text in 'p' tags - <p>{text}</p>
              characters="01" // Scramble text using numbers only
              speed={50}
              delay={100}
              revealText
              revealSpeed={50}
              revealMode="typewriter" // Reveal text from left to right
            />
            <TextScramble
              text="Developer Web Full Stack - Diseñador Web"
              autostart
              wrappingElement="h1" // Wraps the provided text in 'p' tags - <p>{text}</p>
              characters="01" // Scramble text using numbers only
              speed={80}
              delay={150}
              revealText
              revealSpeed={50}
              revealMode="typewriter" // Reveal text from left to right
            />
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

          <ButtonFlotante />
        </animated.div>
      </section>
     
    </>
  );
};
