import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "./components/header/NavHeader";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="layout">
      {/*Header y navegacion*/}
      <NavHeader />
      {/*Contenido general*/}
      <MisRutas />
      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;
