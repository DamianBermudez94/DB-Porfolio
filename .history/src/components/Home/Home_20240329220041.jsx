import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import anime from 'animejs';
import CustomText from "../TextoCustom/CustomText";
import {AnimateSVG} from "../AnimateSVG/AnimateSVG"
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
  const squareRef = useRef(null);
  const circleRef = useRef(null);
  const triangleRef = useRef(null);

  useEffect(() => {
    const randomValues = () => {
      anime({
        targets: [squareRef.current, circleRef.current, triangleRef.current],
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-300, 300),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.2, 2),
        duration: 1000,
        easing: "easeInOutQuad",
        complete: randomValues,
      });
    };

    randomValues();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

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
        <div className="square" ref={squareRef}></div>
        <div className="square" ref={squareRef}></div>
        <div className="square" ref={squareRef}></div>
        <div className="circle" ref={circleRef}></div>
        <div className="triangle" ref={triangleRef}></div>
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
                <strong>Developer Web Full Stack</strong> en busca de nuevas
                oportunidades y poder seguir creciendo profecionalmente.LLevo
                más de dos años y medio estudiando/perfeccionandome en las
                tecnologías más demandadas del mercado.
              </p>
            </li>
            <li>
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
        <AnimateSVG/>
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
            En un mundo donde las cosas cambian más rápido que el clima, tener a
            alguien versátil como ellos significa que tu proyecto estará listo
            para cualquier desafío que se le presente. Son como ese amigo
            confiable que siempre tiene un plan B en su bolsillo, ¡solo que en
            versión digital!.
          </p>
        </article>
      </section>
    </>
  );
};
