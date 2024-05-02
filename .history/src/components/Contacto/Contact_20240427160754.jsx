import { ButtonInformacion } from "../ButtonInformacion/ButtonInformacion";
import sendEmail from "../../firebase/SendEmail";
import "./styles.css";
import "./styles.css";
export const Contact = () => {
  function handlerSubmit(e){
    e.preventDefault();
    const correo = e.target.nombre.value
  }


  return (
    <section className="container-form" data-animation="diagonal">
      <h1 className="title-contacto">Contacto</h1>
      <span className="sub-title__contacto">Contacto</span>
      <form id="formulario" onSubmit={handlerSubmit} >
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
        <ButtonInformacion text="Enviar"/>
        <div className="mensaje-form">
          <strong>
            * No dudes en consultarme, te estare respondiendo a la brevedad *
          </strong>
        </div>
      </form>
    </section>
  );
};