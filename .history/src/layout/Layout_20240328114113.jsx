import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../components/Home/Home";
import { Service } from "../components/Servicios/Service";
export const Layout = () => {
  return (
    <div>
      <NavHeader />
      <main>
        <Home />
        <Service/>
      </main>
      <Footer />
    </div>
  );
};
