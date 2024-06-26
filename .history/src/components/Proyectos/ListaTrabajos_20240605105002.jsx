/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./styles.css";

export const ListadoTrabajos = ({ limite = 10 }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [filtro, setFiltro] = useState("todos"); // Estado para el filtro

  const openModal = (event, id) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollX,
      left: rect.left + window.scrollX,
      bottom: rect.bottom + window.scrollY,
      right: rect.right + window.scrollX,
    });
    setProyectoSeleccionado(id);
    setModalIsOpen(true);
  };
  const proyecto = trabajos.find(
    (trabajo) => trabajo.id === proyectoSeleccionado
  );
  const filteredTrabajos = trabajos.filter((trabajo) => {
    if (filtro === "todos" || filtro === trabajo.tipo) return true;

    return trabajo.tipo === filtro;
  });

  return (
    <div className="container-proyectos">
      <div className="container-filtro">
        <label htmlFor="filtro">Filtrar por:</label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="curso">Cursos</option>
          <option value="freelance">Trabajos Freelance</option>
        </select>
      </div>
      {filteredTrabajos.slice(0, limite).map((trabajo) => {
        return (
          <div key={trabajo.id} className="card-proyectos">
            <LazyLoad>
              <figure
                className="content-proyectos__img"
                onClick={(event) => openModal(event, trabajo.id)}
              >
                <img
                  src={"/image/" + trabajo.id + ".png"}
                  alt="Damián Bermúdez - Developer "
                />
              </figure>
            </LazyLoad>
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Detalles del Proyecto"
              shouldCloseOnOverlayClick={true}
              className="mi-modal" // Agrega una clase para personalizar el modal
              overlayClassName="mi-modal-overlay"
              onRequestClose={() => setModalIsOpen(false)}
            >
              {proyecto && (
                <div className="container-modal">
                  <h2>{proyecto.nombre}</h2>
                  <p>
                    {proyecto.tecnologias}
                  </p>
                  <p>
                    {proyecto.description}
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
    </div>
  );
};
