import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";

export const Proyectos = () => {
  return (
    <section className="">
      <h1 className="title-proyectos">Proyectos</h1>
      <span className="sub-title__proyectos">Proyectos</span>
      <p className="subtitle-proyectos">
        Estos son algunos de mis proyectos mas sobresaliente hasta el momento
      </p>
      <ListadoTrabajos />
    </section>
  );
};
