import "./App.css";
import { MisRutas } from "./routers/MisRutas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <MisRutas />
      </BrowserRouter>
    </main>
  );
}

export default App;
