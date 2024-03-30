import "./styles.css"
export const Contact = () => {
  return (
    <section className="container-form" data-animation="diagonal">
      <h1 className="title-contacto">Contacto</h1>
      <span className="sub-title__contacto">Contacto</span>
      <form id="formulario" action="mailto:bermudezdamian7@gmail.com">
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
          name="mensaje"
          id="mensaje"
          placeholder="Deje su mensaje......"
        ></textarea>
        <button type="submit" className="btn-enviar mostrarArriba">
        ¡Contáctame!
          <span className="border border-top"></span>
          <span className="border border-right"></span>
          <span className="border border-bottom"></span>
          <span className="border border-left"></span>
        </button>
        <div className="mensaje-form">
          <strong>* No dudes en consultarme, te estare respondiendo a la brevedad *</strong>
        </div>
      </form>
    </section>
  );
};