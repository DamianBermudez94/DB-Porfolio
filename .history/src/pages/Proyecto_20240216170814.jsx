import { useState } from "react";
import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";
import { trabajos } from "../data/trabajos";
// eslint-disable-next-line react/prop-types
export const Proyectos = ({limite=10}) => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (id) => {
    setProyectoSeleccionado(id);
  };
  return (
    <div>
      <section className="section-proyectos">
        <h1 className="title-proyectos">Proyectos</h1>
        {trabajos.slice(0, limite).map((trabajo) => (
        <ListadoTrabajos  key={trabajo.id} trabajo={trabajo}  abrirModal={abrirModal}  />
        ))}
        
      </section>
    </div>
  );
};
