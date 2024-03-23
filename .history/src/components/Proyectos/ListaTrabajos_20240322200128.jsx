
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = () => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const openModal = (trabajo) => {
    setProyectoSeleccionado(trabajo);
  };

  const closeModal = () => {
    setProyectoSeleccionado(null);
  };

  return (
    <div className="container-proyectos">
      {trabajos.map((trabajo) => {
        return (
          <div key={trabajo.id} className="card-proyectos">
            <figure
              className="content-proyectos__img"
              onClick={() => openModal(trabajo)}
            >
              <img
                src={`/image/${trabajo.id}.png`}
                alt={`Imagen de ${trabajo.nombre}`}
              />
            </figure>
          </div>
        );
      })}

      {proyectoSeleccionado && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <img
              src={`/image/${proyectoSeleccionado.id}.png`}
              alt={`Imagen de ${proyectoSeleccionado.nombre}`}
            />
            <h2>{proyectoSeleccionado.nombre}</h2>
            <p>
              <strong>Tecnologías:</strong> {proyectoSeleccionado.tecnologias}
            </p>
            <p>
              <strong>Descripción:</strong> {proyectoSeleccionado.descripcion}
            </p>
            <div className="content-proyectos__enlace">
              <NavLink
                className="proyectos-enlace"
                to={proyectoSeleccionado.url}
                target="_blank"
              >
                Demo
              </NavLink>
              <NavLink
                className="proyectos-enlace"
                to={proyectoSeleccionado.git}
                target="_blank"
              >
                Git
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};