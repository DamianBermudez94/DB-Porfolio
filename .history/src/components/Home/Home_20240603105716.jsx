import { useState, useEffect } from "react";
import TextScramble from "@skits/react-text-scramble";
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
      <section className="home">
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
              text="Developer Web Full Stack - Desiñador Web "
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
              Bienvenidos a mi portafolio, donde encontrarás mis servicios y
              proyectos.<br></br> Llevo 3 años dedicándome a las tecnologías más
              demandadas del mercado, y estoy listo para ofrecer soluciones
              innovadoras y de alta calidad para tus proyectos.<br></br> Mi portafolio
              incluye proyectos web de diversa envergadura, desde la creación de
              sitios web responsivos hasta la optimización del rendimiento y la
              implementación de características interactivas.<br></br> Recientemente, he
              estado perfeccionando mis habilidades y realizando proyectos en
              React y Next.js, además de mejorar el diseño para garantizar la
              calidad de mis trabajos.
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
