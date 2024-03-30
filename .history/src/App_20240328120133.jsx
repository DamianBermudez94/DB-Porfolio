import "./App.css";
import { MisRutas } from "./routers/MisRutas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MisRutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
