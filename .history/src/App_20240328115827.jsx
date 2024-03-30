import { Suspense } from "react";
import "./App.css";
import { MisRutas } from "./routers/MisRutas";

function App() {
  return (
    <Suspense>
      <MisRutas />
    </Suspense>
  );
}

export default App;
