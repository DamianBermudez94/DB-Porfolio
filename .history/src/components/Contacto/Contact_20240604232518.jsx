
import "./styles.css";
export const Contact = () => {
  return (
    <section className="container-form" data-animation="diagonal" id="contacto">
      
      <div>
      <h1 className="title-contacto">Contacto</h1>
      <span className="sub-title__contacto">Contacto</span>
      </div>
      <form id="formulario">
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escriba su nombre..."
        />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Escriba su numero de telefono..."
        />
        <input
          type="email"
          id="email"
          name="correo"
          placeholder="Escriba su email..."
        />
        <textarea
          name="asunto"
          id="mensaje"
          placeholder="Deje su mensaje......"
        ></textarea>
        <button type="submit">Enviar</button>
        <div className="mensaje-form">
          <strong>
            * No dudes en consultarme, te estare respondiendo a la brevedad *
          </strong>
        </div>
      </form>
    </section>
  );
};
