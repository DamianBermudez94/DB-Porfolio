import { Suspense } from "react";
import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "../src/components/header/NavHeader";
import { Footer } from "../src/components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Cargando....</div>}>
      <NavHeader />
      <MisRutas />
      <Footer />
    </Suspense>
  );
}

export default App;
