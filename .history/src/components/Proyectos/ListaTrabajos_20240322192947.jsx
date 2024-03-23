/* eslint-disable react/prop-types */
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = ({ limite = 10 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const openModal = (trabajo) => {
    setProyectoSeleccionado(trabajo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
console.log(trabajos);

  return (
    <div className="container-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => {
        return (
          <div key={trabajo.id} className="card-proyectos">
            <figure
              className="content-proyectos__img"
              onClick={(event) => openModal(event, trabajo.id)}
            >
              <img
                src={"/image/" + trabajo.id + ".png"}
                alt="Damián Bermúdez - Developer "
              />
            </figure>
            {modalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img src={`/image/${proyectoSeleccionado.id}.png`} alt={`Imagen de ${proyectoSeleccionado.nombre}`} />
            <h2>{proyectoSeleccionado.nombre}</h2>
            <p><strong>Tecnologías:</strong> {proyectoSeleccionado.tecnologias}</p>
            <p><strong>Descripción:</strong> {proyectoSeleccionado.descripcion}</p>
            <div className="content-proyectos__enlace">
              <NavLink className="proyectos-enlace" to={proyectoSeleccionado.url} target="_blank">Demo</NavLink>
              <NavLink className="proyectos-enlace" to={proyectoSeleccionado.git} target="_blank">Git</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>

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
