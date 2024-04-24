
import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor-footer container">
          <div className="footer-redes__sociales">
              <a href="https://www.facebook.com" className="link-redes_sociales" ><i className="fab fa-facebook facebook"></i></a>
              <a href="https://www.instagram.com" className="link-redes_sociales" ><i className="fab fa-instagram instagran"></i></a>
              <a href="https://www.linkedin.com" className="link-redes_sociales" ><i className="fab fa-linkedin linkedin"></i></a>
              <a href="https:/www.github.com" className="link-redes_sociales" ><i className="fab fa-github-square github"></i></a>
          </div>
          <hr className='footer-linea__separacion' />
          <div className="content-copy">
              <p className="title-copy">Hecho por</p>
              <a className="enlace-logo" href="https://damianbermudezdev.es/"><img src={"/image/nuevoLogo-DB3.png"} alt="" /></a>
          </div>
      </div>
    </footer>
  )
}
