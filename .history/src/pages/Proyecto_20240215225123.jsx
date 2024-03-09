import { useState } from "react";
import { trabajos } from "../../data/trabajos";
import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";
// eslint-disable-next-line react/prop-types
export const Proyectos = ({limite}) => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (id) => {
    setProyectoSeleccionado(id);
  };
  return (
    <div>
       <h1 className="title-proyectos">Proyectos</h1>
      <section className="section-proyectos">
      {trabajos.slice(0, limite).map((trabajo) => (
        // eslint-disable-next-line react/prop-types
        <ListadoTrabajos key={trabajo.id} trabajo={trabajo} abrirModal={abrirModal} />
      ))}
    </section>
      
     
    </div>
  );
};