/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = ({ limite = 10 }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (id) => {
    setProyectoSeleccionado(id);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
    setModalIsOpen(false);
  };
  const proyecto = trabajos.find(
    (trabajo) => trabajo.id === proyectoSeleccionado
  );

  const image = document.getElementById("myImage");
  image.addEventListener("click", function (event) {
    const rect = image.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    console.log(x,y);
    // Ahora tienes las coordenadas (x, y) de la imagen
  });
  return (
    <section className="section-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => {
        return (
          <div key={trabajo.id} className="card-proyectos">
            <figure
              className="content-proyectos__img"
              onClick={() => abrirModal(trabajo.id)}
            >
              <img
                src={"/image/" + trabajo.id + ".png"}
                alt="Damián Bermúdez - Developer "
              />
            </figure>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={cerrarModal}
              contentLabel="Detalles del Proyecto"
              shouldCloseOnOverlayClick={true}
              className="mi-modal" // Agrega una clase para personalizar el modal
              overlayClassName="mi-modal-overlay" // Agrega una clase para personalizar el overlay
            >
              {proyecto && (
                <div>
                  <button onClick={cerrarModal}>X</button>
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
            </Modal>
          </div>
        );
      })}
    </section>
  );
};
