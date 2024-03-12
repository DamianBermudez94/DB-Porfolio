import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";

export const Proyectos = () => {
  return (
    <div>
      <h1 className="title-proyectos">Proyectos</h1>
      <p>Estos son algunos de mis proyectos mas sobresaliente hasta el momento</p>
      <ListadoTrabajos />
    </div>
  );
};
