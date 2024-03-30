import { Suspense } from "react";
import { MisRutas } from "./routers/MisRutas";
import { NavHeader } from "../src/components/header/NavHeader";
import { Footer } from "../src/components/Footer/Footer";
import "./App.css";

function App() {
  return (
 
      <NavHeader />
      <MisRutas />
      <Footer />
   
  );
}

export default App;
