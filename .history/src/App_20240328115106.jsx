import { Suspense } from "react";
import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "../src/components/header/NavHeader";
import { Footer } from "../src/components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavHeader />
      <MisRutas />
      <Footer />
    </div>
  );
}

export default App;
