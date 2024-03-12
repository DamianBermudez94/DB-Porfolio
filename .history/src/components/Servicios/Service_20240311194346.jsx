
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
          <h3 className="text-title">Front-end </h3>
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
              Como Desarrollador FullStack, creo mis propias API´s REST para
              que puedan ser consumidas facilmente por un FrontEnd utilizando
              el esquema MVC (Model/View/Controller). Donde utilizo Postman
              para diseñar y los endpoints, Node.Js con Express para el
              montado y brindando la capacidad de alojar la data consumida
              tanto en una base de datos SQL como No-SQL. Sumandole el uso
              de algunas bases de datos extras como Algolia para poder
              efectuar busquedas complejas.
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
