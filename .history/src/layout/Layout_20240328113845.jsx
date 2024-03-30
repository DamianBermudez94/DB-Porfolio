
import { NavHeader } from "../components/header/NavHeader";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../components/Home/Home";
export const Layout = () => {
  return (
    <div>
      <NavHeader />
        <main>
        <Home/>
        </main>
      <Footer />
    </div>
  );
};
