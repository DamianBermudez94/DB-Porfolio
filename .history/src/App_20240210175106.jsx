import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "../src/components/header/NavHeader";
import "./App.css";

function App() {
  return (
    <div className="layout">
     {/*Header y navegacion*/}
     <NavHeader />
     <main>
       {/*Contenido general*/}
       <MisRutas />
     </main>
     
     
    </div>
  );
}

export default App;
