/* eslint-disable react/prop-types */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const ListadoTrabajos = ({ limite = 10 }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };
  return (
    <section className="section-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => {
        return (
          <article key={trabajo.id} className="card-proyectos">
            <div className="content-proyectos__img">
              <img
                src={"/image/" + trabajo.id + ".png"}
                alt="Damián Bermúdez - Developer "
                onClick={abrirModal}
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
      })}
    </section>
  );
};
