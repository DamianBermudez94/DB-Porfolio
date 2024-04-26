import { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import { MisRutas } from "./routers/MisRutas";
import { BrowserRouter } from "react-router-dom";
import backgroundImage from "../public/image/banner-parallax2.jpg";
import "./App.css";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="content-main parallax-container">
      <LazyLoad
        className="parallax-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: scrollPosition / 2 + "px",
        }}
      />
      <div className="parallax-content">
        <BrowserRouter>
          <MisRutas />
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
