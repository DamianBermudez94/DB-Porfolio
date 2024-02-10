import { NavLink } from "react-router-dom";
import { ListadoTrabajos } from "./ListaTrabajos";

export const Inicio = () => {
  return (
    <div className="home">
      <section className="home-welcome">
        <div className="container-home">
          <h1 className="title-welcome" style={{ "--duration": "1s" }}>
            <span style={{ "--delay": " .5s" }}>Hola! Mi nombre es,</span>
            <span className="title-custom" style={{ "--delay": ".6s" }}>
              Damián Bermúdez.
            </span>
            <span className="parrafo-welcome" style={{ "--duration": "1s" }}>
              <span style={{ "--delay": " .7s" }}>
                Developer web full stack.
              </span>
            </span>
          </h1>

          <div className="container-redes_inicio">
            <NavLink
              to="https://www.linkedin.com/in/damian-bermudez-4a4a33204/"
              className="link-redes_sociales"
              target="_blank"
            >
              <i className="fab fa-linkedin linkedin"></i>
            </NavLink>
            <NavLink
              to="https:/www.github.com"
              className="link-redes_sociales"
              target="_blank"
            >
              <i className="fab fa-github-square github"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="section-me">
        <h2>Sobre mi</h2>
        <div className="container-me" data-animation="diagonal">
          <img
            src={"/image/profile-damianbermudez.png"}
            alt="Damian Bermudez desarrollador web"
          ></img>
          <p>
            Soy Damián Bermúdez, tengo 28 años y soy de Lobos - Provincia de
            Buenos Aires - Argentina. Soy{" "}
            <strong>Developer web full stack</strong>. Empece a estudiar
            programación de aplicaciones moviles en 2020, en un instituto de mi
            localidad, por cuestiones de tiempo (muchas materias y además
            trabajo en un fabrica metalurgica 9 horas) tuve que dejar. Empece de
            forma autodidacta estudiando desarrollado web y quede encantado. Fui
            adquiriendo los conocimientos mediante tutoriales de youtube hasta
            que me tope con un anuncio en las redes sociales de la plataforma{" "}
            <a className="enlace-carrera" href="https://apx.school/">
              APX
              <span className="border border-top"></span>
              <span className="border border-right"></span>
              <span className="border border-bottom"></span>
              <span className="border border-left"></span>
            </a>{" "}
            donde actualmente estoy cursando la carrera de programacion web full
            stack, además estoy realizando dos cursos en la plataforma udemy,
            uno <strong>Master en React</strong> y el otro{" "}
            <strong>Master en JavaScript.</strong>
          </p>
        </div>
      </section>
      <section className="lasts-works">
        
        <hs>Estos son algunos de mis trabajos como desarrollador web</hs>
        <ListadoTrabajos limite="3" />
        <div className="container-contacto" data-animation="diagonal">
          <p className="parrafo-contacto">
          ¡Explora mi portafolio y descubre cómo puedo ayudar a hacer realidad tu visión digital!{" "}
            <NavLink className="enlace-contacto" to="/contacto">
              Contactate
              <span className="border border-top"></span>
              <span className="border border-right"></span>
              <span className="border border-bottom"></span>
              <span className="border border-left"></span>
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};
