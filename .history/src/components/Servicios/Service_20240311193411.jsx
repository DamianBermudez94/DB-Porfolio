
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
            Mi trabajo se basa en el desarrollo de las interfaces de usuario
            para Singles Pages Apps montadas en la web, utilizando
            diferentes hostings para poder alojarlas. Donde tambíen consumo
            API´s REST para poder montar el contenido. Utilizando el
            paradigma de programación reactiva por medio de un estado y
            routers para mantener actualizados los entornos y redirigir la
            navegación. Lo que permite que el mismo entorno sea suceptible y
            escuche los cambios que vengan desde diferentes puntos de de la
            App.
          </p>
        </div>
        <NavLink className="card-button" to="/contacto">
          Más info
        </NavLink>
      </article>
      <article className="card">
        <div className="card-details">
          <h3 className="text-title">BackEnd</h3>
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
