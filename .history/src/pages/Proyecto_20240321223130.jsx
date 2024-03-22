import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";

export const Proyectos = () => {
  return (
    <section className="section-proyectos">
      <h1 className="title-proyectos">Proyectos</h1>
      <span className="sub-title__proyectos">Proyectos</span>
     
      <ListadoTrabajos />
    </section>
  );
};
