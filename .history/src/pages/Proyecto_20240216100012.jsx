import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";
// eslint-disable-next-line react/prop-types
export const Proyectos = () => {
  return (
    <div>
      <section className="section-proyectos">
        <h1 className="title-proyectos">Proyectos</h1>

        <ListadoTrabajos />
      </section>
    </div>
  );
};
