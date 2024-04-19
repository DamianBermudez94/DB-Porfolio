import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./styles.css";



export const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      console.log(sectionPosition);
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Llamamos a handleScroll() una vez al principio para verificar la visibilidad inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section-servicios scroll-effect" id="mis-servicios">
      <h1 className="title-servicios">Servicios</h1>
      <span className="sub-title__servicios">Servicios</span>
      <div
        ref={sectionRef} className={`container-card_servicios ${isVisible ? 'visible' : 'hidden'}`}
      >
        <article
          className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}
        >
          <div className="card-details">
            <img src="/image/front-end.png" alt="Front end - Developer Web" />
            <h3 className="text-title">Front-end</h3>
            <ul>
              <li>
                <p>
                  {" "}
                  Diseño de interfaces de usuario modernas y atractivas que se
                  adapten a las últimas tendencias de diseño web y a las
                  necesidades del cliente.
                </p>
              </li>
              <li>
                <p>
                  Desarrollo de experiencias de usuario intuitivas y fluidas
                  mediante el uso de tecnologías como HTML5, CSS3 y JavaScript,
                  asegurando una navegación fácil y agradable.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Optimización para dispositivos móviles y diferentes tamaños de
                  pantalla, garantizando que el sitio sea accesible y funcional
                  en cualquier dispositivo.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Implementación de animaciones y efectos interactivos para
                  mejorar la interactividad y el atractivo visual del sitio.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Integración de frameworks y librerías front-end como React
                  para desarrollar aplicaciones web robustas y de alto
                  rendimiento.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-arriba ${isVisible ? "visible" : ""}`}
        >
          <div className="card-details">
            <img src="/image/back-end.png" alt="Back end - Developer Web" />
            <h3 className="text-title">Back-end</h3>
            <ul>
              <li>
                <p>
                  Desarrollo de arquitecturas backend escalables y seguras
                  utilizando tecnologías como Node.js, Express, según las
                  necesidades del proyecto.
                </p>
              </li>
              <li>
                <p>
                  Implementación de bases de datos eficientes y fiables (SQL o
                  NoSQL) para gestionar datos de manera efectiva y garantizar un
                  rendimiento óptimo del sitio.
                </p>
              </li>
              <li>
                <p>
                  Creación de APIs RESTful para facilitar la comunicación entre
                  el front end y el back end, permitiendo una interacción
                  dinámica y fluida.
                </p>
              </li>
              <li>
                <p>
                  Implementación de sistemas de autenticación y autorización
                  robustos para proteger los datos sensibles y garantizar la
                  seguridad del sitio.
                </p>
              </li>
              <li>
                <p>
                  Optimización del rendimiento del servidor y de las consultas a
                  la base de datos para mejorar la velocidad de carga y la
                  experiencia del usuario.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>

        <article
          className={`card  scroll-reveal-izquierda ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img src="/image/web-design.png" alt="Web design - diseño web" />
            <h3 className="text-title">Diseño Web</h3>
            <ul>
              <li>
                <p>
                  Creación de diseños visualmente atractivos y coherentes que
                  reflejen la marca y cautiven al público objetivo.
                </p>
              </li>
              <li>
                <p>
                  Utilización de principios de diseño UX/UI para garantizar una
                  navegación intuitiva y una experiencia de usuario
                  satisfactoria.
                </p>
              </li>
              <li>
                <p>
                  Integración de elementos multimedia y contenido interactivo
                  para enriquecer la experiencia del usuario.
                </p>
              </li>
              <li>
                <p>
                  Enfoque en la accesibilidad web y la usabilidad para
                  garantizar que el sitio sea inclusivo y accesible para todos
                  los usuarios.
                </p>
              </li>
              <li>
                <p>
                  Colaboración estrecha con el cliente para entender sus
                  necesidades y objetivos, y ofrecer soluciones creativas y
                  efectivas.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-derecha ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img
              src="/image/landing-page.png"
              alt="landing page - paginas de aterrizaje"
            />
            <h3 className="text-title">Landin page</h3>
            <ul>
              <li>
                <p>
                  Diseño atractivo y personalizado que captura la atención del
                  visitante desde el primer momento.
                </p>
              </li>
              <li>
                <p>
                  Optimización para una experiencia de usuario intuitiva y de
                  carga rápida, maximizando las conversiones.
                </p>
              </li>
              <li>
                <p>
                  Uso de elementos persuasivos como llamadas a la acción (CTA)
                  claras y botones de contacto que incitan a la interacción.
                </p>
              </li>
              <li>
                <p>
                  Integración de formularios de contacto y captura de leads para
                  facilitar el seguimiento y la generación de clientes
                  potenciales.
                </p>
              </li>
              <li>
                <p>
                  Implementación de técnicas de SEO on-page para mejorar la
                  visibilidad y el posicionamiento en los motores de búsqueda.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-derecha ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img
              src="/image/e-commerce-service.png"
              alt="E-Commerce - Tienda online"
            />
            <h3 className="text-title">E-Commerce</h3>
            <ul>
              <li>
                <p>
                  Desarrollo de tiendas online seguras y fáciles de usar, con
                  sistemas de pago integrados para facilitar las transacciones.
                </p>
              </li>
              <li>
                <p>
                  Diseño de interfaces intuitivas que guíen al usuario a través
                  del proceso de compra, minimizando los pasos necesarios.
                </p>
              </li>
              <li>
                <p>
                  Personalización de la experiencia de compra mediante
                  recomendaciones de productos, ofertas especiales y funciones
                  de seguimiento de pedidos.
                </p>
              </li>
              <li>
                <p>
                  Implementación de herramientas de análisis y seguimiento para
                  entender el comportamiento del usuario y optimizar la
                  conversión.
                </p>
              </li>
              <li>
                <p>
                  Integración con plataformas de marketing digital y redes
                  sociales para impulsar el tráfico y las ventas.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
        <article
          className={`card  scroll-reveal-izquierda ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="card-details">
            <img src="/image/web-site.png" alt="E-Commerce - Tienda online" />
            <h3 className="text-title">Sitios Web</h3>
            <ul>
              <li>
                <p>
                  Desarrollo de sitios web responsive, compatibles con
                  dispositivos móviles, para garantizar una experiencia óptima
                  en cualquier pantalla.
                </p>
              </li>
              <li>
                <p>
                  Diseño centrado en el usuario que refleja la identidad y
                  valores de la marca, generando confianza y credibilidad.
                </p>
              </li>
              <li>
                <p>
                  Funcionalidades personalizadas y escalables según las
                  necesidades del cliente, desde blogs y galerías de productos
                  hasta integraciones con redes sociales.
                </p>
              </li>
              <li>
                <p>
                  Optimización del rendimiento y la velocidad de carga para
                  mejorar el posicionamiento SEO y la satisfacción del usuario.
                </p>
              </li>
              <li>
                <p>
                  Mantenimiento y soporte continuo para garantizar la seguridad
                  y el funcionamiento óptimo del sitio a lo largo del tiempo.
                </p>
              </li>
            </ul>
          </div>
          <NavLink className="card-button" to="/contacto">
            <span>¡Contáctame!</span>
            <span></span>
          </NavLink>
        </article>
      </div>
    </section>
  );
};
