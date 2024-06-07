import "./styles.css";
export const Contact = () => {
  return (
    <section className="container-form" data-animation="diagonal" id="contacto">
      <div>
        <h1 className="title-contacto">Contacto</h1>
        <span className="sub-title__contacto">Contacto</span>
        <div className="content-redes__sociales">
          <a href="https://www.facebook.com" className="link-redes_sociales">
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="link-redes_sociales">
            <i className="fab fa-instagram instagran"></i>
          </a>
          <a href="https://www.linkedin.com" className="link-redes_sociales">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https:/www.github.com" className="link-redes_sociales">
            <i className="fab fa-github-square github"></i>
          </a>
        </div>
      </div>

      <form id="formulario">
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escriba su nombre..."
          required
        />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Escriba su numero de telefono..."
          required
        />
        <input
          type="email"
          id="email"
          name="correo"
          placeholder="Escriba su email..."
          required
        />
        <textarea
          name="asunto"
          id="mensaje"
          placeholder="Deje su mensaje......"
          required
        ></textarea>
        <button type="submit" className="btn-enviar">
          <span>Enviar</span>
          <span></span>
        </button>
        <div className="mensaje-form">
          <strong>
            * No dudes en consultarme, te estare respondiendo a la brevedad *
          </strong>
        </div>
      </form>
    </section>
  );
};
