import { Suspense } from "react";
import { MisRutas } from "./routers/MisRutas";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Cargando....</div>}>
      <MisRutas />
    </Suspense>
  );
}

export default App;
