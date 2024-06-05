
import LazyLoad from "react-lazyload";
import { ButtonInformacion } from "../ButtonInformacion/ButtonInformacion";
import imagen from "../../../public/image/profile-pic.png";
export const AcercaDe = () => {
  return (
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
              <strong>
                Bienvenidos a mi portafolio, donde encontrarás mis servicios y
                proyectos.
              </strong>
              <br></br>Llevo 3 años dedicándome a las tecnologías más demandadas
              del mercado, y estoy listo para ofrecer soluciones innovadoras y
              de alta calidad para tus proyectos.<br></br> Mi portafolio incluye
              proyectos web de diversa envergadura, desde la creación de sitios
              web responsivos hasta la optimización del rendimiento y la
              implementación de características interactivas.<br></br>{" "}
              Recientemente, he estado perfeccionando mis habilidades y
              realizando proyectos en React y Next.js, además de mejorar el
              diseño para garantizar la calidad de mis trabajos.
            </p>
          </article>
          <ButtonInformacion text="¡Demos vida a tu idea!" />
        </animated.div>
      </section>
  )
}
