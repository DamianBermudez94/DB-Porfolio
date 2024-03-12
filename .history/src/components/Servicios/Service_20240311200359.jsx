import { NavLink } from "react-router-dom";

import "./styles.css"
export const Service = () => {
  return (
    <section
    className="section-servicios animacionIzquierda"
    id="mis-servicios"
  >
    <h3 className="title-servicios">Mis Servicios</h3>
    <div className="container-card_servicios">
      <article className="card">
        <div className="card-details">
          <img src="/image/web-design.png" alt="Web design - diseño web" />
          <h3 className="text-title">Web Design</h3>
          <p className="text-body">
            {" "}
            Transformo ideas en experiencias visuales cautivadoras. Desde el concepto inicial hasta la implementación, cada detalle cuenta. Tu sitio web no solo será funcional, sino también estéticamente atractivo y alineado con tu visión.
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
      <article className="card">
        <div className="card-details">
        <img src="/image/landing-page.png" alt="landing page - paginas de aterrizaje" />
          <h3 className="text-title">Páginas de aterrizaje</h3>
          <p className="text-body">
            {" "}
            Desarrollo landing pages que convierten visitantes en clientes. Optimizo la estructura y el contenido para maximizar la participación, asegurando que cada visita sea una oportunidad para impulsar tus objetivos de conversión.
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
      <article className="card">
        <div className="card-details">
          <h3 className="text-title">E-Commerce</h3>
          <p className="text-body">
            {" "}
            Construyo plataformas de comercio electrónico robustas y fáciles de usar. Desde la presentación visual de productos hasta la experiencia de compra fluida, cada aspecto se diseña pensando en la satisfacción del usuario y el crecimiento de tu negocio en línea.
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
      <article className="card">
        <div className="card-details">
          <h3 className="text-title">Front-end</h3>
          <img src="" alt="" />
          <p className="text-body">
            {" "}
            Creo interfaces de usuario que no solo son atractivas, sino también altamente funcionales. Utilizo las últimas tecnologías y prácticas de desarrollo para asegurarme de que tu sitio web no solo se vea bien en todos los dispositivos, sino que también ofrezca una experiencia de usuario excepcional.
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
      
      <article className="card">
        <div className="card-details">
          <h3 className="text-title">Back-end</h3>
          <p className="text-body">
            {" "}
            <p>
            La funcionalidad es la columna vertebral de cualquier sitio web. Con experiencia en el desarrollo de back-end, construyo la infraestructura necesaria para que tu sitio funcione de manera eficiente y sin problemas. Base de datos, lógica de negocios y seguridad, todo en conjunto.
            </p>
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
    </div>
  </section>
  )
}
