import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { NavHeader } from "../src/components/header/NavHeader";
import { Footer } from "../src/components/Footer/Footer";

import backgroundImage from "../public/image/banner-parallax2.jpg";
import "./App.css";
import { Main } from "./components/Main/Main";
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
        {/*Header y navegacion*/}
        <NavHeader />

        <Main />
        {/* Footer*/}
        <Footer />
      </div>
    </main>
  );
}

export default App;
