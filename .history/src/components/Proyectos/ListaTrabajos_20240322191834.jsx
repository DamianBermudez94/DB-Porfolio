/* eslint-disable react/prop-types */
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = ({ limite = 10 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const openModal = (event, id,imageId) => {
    setSelectedImage(`/image/${imageId}.png`);
    setProyectoSeleccionado(id);
    setModalOpen(true);
  };
   // Función para cerrar el modal
   const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  }
  const proyecto = trabajos.find(
    (trabajo) => trabajo.id === proyectoSeleccionado
  );

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

            {proyecto && (
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
            )}
          </div>
        );
      })}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Imagen ampliada"
          />
        </div>
      )}
    </div>
  );
};
