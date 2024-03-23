import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [proyectoSeleccionadoIndex, setProyectoSeleccionadoIndex] = useState(null);

  const openModal = (index) => {
    console.log(setProyectoSeleccionadoIndex(index.toString()));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container-proyectos">
      {trabajos.map((trabajo, index) => {
        return (
          <div key={trabajo.id} className="card-proyectos">
            <figure
              className="content-proyectos__img"
              onClick={() => openModal(index)}
            >
              <img
                src={`/image/${trabajo.id}.png`}
                alt={`Imagen de ${trabajo.nombre}`}
              />
            </figure>
          </div>
        );
      })}

      {modalIsOpen && proyectoSeleccionadoIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{trabajos[proyectoSeleccionadoIndex].nombre}</h2>
            <p>
              <strong>Tecnologías:</strong> {trabajos[proyectoSeleccionadoIndex].tecnologias}
            </p>
            <p>
              <strong>Descripción:</strong> {trabajos[proyectoSeleccionadoIndex].description}
            </p>
            <div className="content-proyectos__enlace">
              <NavLink
                className="proyectos-enlace"
                to={trabajos[proyectoSeleccionadoIndex].url}
                target="_blank"
              >
                Demo
              </NavLink>
              <NavLink
                className="proyectos-enlace"
                to={trabajos[proyectoSeleccionadoIndex].git}
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
