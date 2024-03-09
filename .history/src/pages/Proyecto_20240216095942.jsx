
import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";
// eslint-disable-next-line react/prop-types
export const Proyectos = () => {
 
  return (
    <div>
       <h1 className="title-proyectos">Proyectos</h1>
      <section className="section-proyectos">
     
      
        <ListadoTrabajos />
     
    </section>
      
     
    </div>
  );
};