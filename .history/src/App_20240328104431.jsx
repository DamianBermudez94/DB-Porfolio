import { Suspense } from "react";
import { MisRutas } from "./routers/MisRutas";
import "./App.css";

function App() {
  return (
    <Suspense fallback="cargandooooooo....." className="layout">
      <MisRutas />
    </Suspense>
  );
}

export default App;
