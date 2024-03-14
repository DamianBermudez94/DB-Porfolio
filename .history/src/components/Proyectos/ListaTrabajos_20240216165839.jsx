/* eslint-disable react/prop-types */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";
export const ListadoTrabajos = ({ trabajo,abrirModal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAbrirModal = () => {
    setModalVisible(true);
    abrirModal(trabajo.id); // Envía el ID del proyecto al padre
  };

  const cerrarModal = () => {
    setModalVisible(false);
    abrirModal(null); // Envía null al padre para cerrar el modal
  };
  return (
    <section className="section-proyectos">
      return (
      <article key={trabajo.id} className="card-proyectos">
        <div className="content-proyectos__img">
          <img
            src={"/image/" + trabajo.id + ".png"}
            alt="Damián Bermúdez - Developer "
            onClick={handleAbrirModal}
          />
          {modalVisible && (
            <div className="modal">
              <div className="modal-contenido">
                <span className="cerrar-modal" onClick={cerrarModal}>
                  &times;
                </span>
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
                ;
              </div>
            </div>
          )}
        </div>
      </article>
      );
    </section>
  );
};
const Portfolio = ({limite=10}) => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (id) => {
    setProyectoSeleccionado(id);
  };

  return (
    <section className="section-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => (
        <ListadoTrabajos key={trabajo.id} trabajo={trabajo} abrirModal={abrirModal} />
      ))}
    </section>
  );
};

export default Portfolio;