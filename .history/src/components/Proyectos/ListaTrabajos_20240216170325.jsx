/* eslint-disable react/prop-types */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";
export const ListadoTrabajos = ({ trabajos,abrirModal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAbrirModal = () => {
    setModalVisible(true);
    abrirModal(trabajos.id); // Envía el ID del proyecto al padre
  };

  const cerrarModal = () => {
    setModalVisible(false);
    abrirModal(null); // Envía null al padre para cerrar el modal
  };
  return (
    <section className="section-proyectos">
      return (
      <article  className="card-proyectos">
        <div className="content-proyectos__img">
          <img
            src={"/image/" + + + ".png"}
            alt="Damián Bermúdez - Developer "
            onClick={handleAbrirModal}
          />
          {modalVisible && (
            <div className="modal">
              <div className="modal-contenido">
                <span className="cerrar-modal" onClick={cerrarModal}>
                  &times;
                </span>
                <h2>hola</h2>
                <p>
                  <span>hola</span>
                </p>
                <p>
                  <span>hola</span>
                </p>
                <div className="content-proyectos__enlace">
                  <NavLink
                    className="proyectos-enlace"
                    to={trabajos.url}
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
                    to={trabajos.git}
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