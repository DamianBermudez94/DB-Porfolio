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
  return (
    <section className="section-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => {
        return (
          <article key={trabajo.id} className="card-proyectos">
            <figure className="content-proyectos__img" onClick={abrirModal}>
              <img
                src={"/image/" + trabajo.id + ".png"}
                alt="Damián Bermúdez - Developer "
              />
            </figure>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={cerrarModal}
              contentLabel="Detalles del Proyecto"
              className="modal"
            >
              {proyecto && (
                <div>
                  <h2>{trabajo.nombre}</h2>
                  <p>
                    <span>{trabajo.tecnologias}</span>
                  </p>
                  <p>
                    <span>{trabajo.description}</span>
                  </p>
                  <div className="content-proyectos__enlace">
                    <NavLink
                      className="proyectos-enlace"
                      to={trabajo.url}
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
                      to={trabajo.git}
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
          </article>
        );
      })}
    </section>
  );
};
