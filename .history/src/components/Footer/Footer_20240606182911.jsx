import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
    
     
        <div className="content-logo__footer">
          <p className="title-copy">Hecho por</p>
          <a className="enlace-logo" href="https://damianbermudezdev.es/">
            <img src={"/image/nuevoLogo-DB3.png"} alt="" />
          </a>
          <p>&copy; 2024 Mi Página Web</p>
        </div>
  
    </footer>
  );
};
