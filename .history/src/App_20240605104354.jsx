import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import backgroundImage from "../public/image/banner-parallax2.jpg";
import { NavHeader } from "../src/components/header/NavHeader";
import { Footer } from "../src/components/Footer/Footer";
import { Main } from "./components/Main/Main";
import "./App.css";
function App() {
  var alturaVentana = window.innerHeight;

  console.log("Altura de la ventana visible:", alturaVentana, "px");
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
    <div className="content-main parallax-container">
      <LazyLoad
        className="parallax-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: scrollPosition / 2 + "px",
        }}
      />
      <div className="parallax-content">
        {/*Header y navegacion*/}
        <NavHeader />

        <Main />
        {/* Footer*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
