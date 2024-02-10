export const Contacto = () => {
  return (
    <div className="container-form" data-animation="diagonal">
      <h1 className="heading">Contacto</h1>

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
          Enviar mensaje
          <span className="border border-top"></span>
          <span className="border border-right"></span>
          <span className="border border-bottom"></span>
          <span className="border border-left"></span>
        </button>
        <div className="mensaje-form">
          <p>No dudes en consultarme, te estare respondiendo a la brevedad</p>
        </div>
      </form>
    </div>
  );
};
