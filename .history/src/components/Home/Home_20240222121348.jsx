
import { NavLink } from "react-router-dom";
import { ListadoTrabajos } from "../Proyectos/ListaTrabajos";
import "./styles.css"
export const Home = () => {
  return (
    <section className="home">
    <div className="home-welcome">
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
            to="https://github.com/DamianBermudez94"
            className="link-redes_sociales"
            target="_blank"
          >
            <i className="fab fa-github-square github"></i>
          </NavLink>
        </div>
      </div>
      <div className="container-cv">
        <a
          className="btn-cv"
          href="./cv-pdf/CVDamianBermudez2023_1_ (1).pdf"
          download="CV-damian-bermudez.pdf"
        >
          Descargar mi CV
        </a>
      </div>
    </div>
    <section className="section-me">
      <h2>Sobre mi</h2>
      <div className="container-me" data-animation="diagonal">
        <img
          src={"/image/profile-damianbermudez.png"}
          alt="Damian Bermudez desarrollador web"
        ></img>
        <p>
          ¡Hola! Soy <strong>Developer Web Full Stack</strong> apasionado por
          la creación de experiencias digitales. Con experiencia en el
          desarrollo tanto del lado del cliente como del servidor, ofrezco
          soluciones web eficientes y atractivas. Estoy aquí para convertir
          tus ideas en realidad y llevar tu presencia en línea al siguiente
          nivel. ¡Conéctate y descubre cómo puedo potenciar tu proyecto!
        </p>
      </div>
      <div className="container-inicio_contacto" data-animation="diagonal">
        <p className="parrafo-contacto">
          ¡Explora mi portafolio y descubre cómo puedo ayudar a hacer realidad
          tu visión digital!{" "}
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
    <section className="content-proyectos__inicio">
      <h2>Estos son algunos de mis proyectos como desarrollador web</h2>
      <ListadoTrabajos limite="2" />
    </section>
  </section>
  )
}
