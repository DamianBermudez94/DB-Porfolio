import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "../components/header/NavHeader";
import "./App.css";

function App() {
  return (
    <div className="layout">
     {/*Header y navegacion*/}
     <NavHeader />
      {/*Contenido general*/}
      <MisRutas />
     
    </div>
  );
}

export default App;
