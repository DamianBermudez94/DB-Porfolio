
import { useState,useCallback } from "react";

import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const openModal = useCallback((id) => {
    const proyecto = trabajos.find((trabajo) => trabajo.id === id);
    setProyectoSeleccionado(proyecto); 
    setModalOpen(true);
  }, [setModalOpen, setProyectoSeleccionado]);

  const closeModal = () => {
    setModalOpen(false);
    setProyectoSeleccionado(null); // Restablecer el proyecto seleccionado
  };

  return (
    <div className="container-proyectos">
      {trabajos.map((trabajo) => {
        console.log(trabajos, trabajo);
        return (
          <div key={trabajo.id} className="card-proyectos">
            <figure
              className="content-proyectos__img"
              onClick={() => openModal(trabajo.id)}
            >
              <img
                src={`/image/${trabajo.id}.png`}
                alt={`Imagen de ${trabajo.nombre}`}
              />
            </figure>

            {modalOpen && (
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
                    <strong>Tecnologías:</strong>{" "}
                    {proyectoSeleccionado.tecnologias}
                  </p>
                  <p>
                    <strong>Descripción:</strong>{" "}
                    {proyectoSeleccionado.descripcion}
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
            {/*{proyecto && (
              <div>
                <h2>{proyecto.nombre}</h2>
                <p>
                  <span>{proyecto.tecnologias}</span>
                </p>
                <p>
                  <span>{proyecto.description}</span>
                </p>
                <div className="content-proyectos__enlace">
                  <NavLink
                    className="proyectos-enlace"
                    to={proyecto.url}
                    target="_blank"
                  >
                    Demo
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                  </NavLink>
                  <NavLink
                    className="proyectos-enlace"
                    to={proyecto.git}
                    target="_blank"
                  >
                    Git
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                  </NavLink>
                </div>
              </div>
            )}*/}
          </div>
        );
      })}
    </div>
  );
};
