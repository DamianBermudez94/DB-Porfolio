import { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import "./styles.css";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xrgnnogr");
   // Estado inicial del formulario
   const initialFormData = {
    name: '',
    email: '',
    telefono:'',
    asunto: '',
  };
  // Configura el estado del formulario
  const [formData, setFormData] = useState(initialFormData);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  if (state.succeeded) {
    setFormData(initialFormData);
  }

  return (
    <section className="container-form" data-animation="diagonal" id="contacto">
      <div className="content">
        <div className="content-title__form">
          <h1 className="title-contacto">Contacto</h1>
          <span className="sub-title__contacto">Contacto</span>
        </div>
        <div className="content-redes__sociales">
          <a
            href="https://www.facebook.com"
            className="link-redes_sociales"
            target="_blank"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="link-redes_sociales"
            target="_blank"
          >
            <i className="fab fa-instagram instagran"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="link-redes_sociales"
            target="_blank"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/DamianBermudez94"
            className="link-redes_sociales"
            target="_blank"
          >
            <i className="fab fa-github-square github"></i>
          </a>
        </div>
      </div>

      <form id="formulario" onSubmit={handleSubmit}>
        <ValidationError />
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escriba su nombre..."
          required
          value={formData.nombre}
          onChange={handleChange}
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Escriba su numero de telefono..."
          required
          value={formData.telefono}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Escriba su email..."
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="asunto"
          id="mensaje"
          placeholder="Deje su mensaje......"
          required
          onChange={handleChange}
          value={formData.asunto}
        ></textarea>
        <button
          type="submit"
          className="btn-enviar"
          disabled={state.submitting}
        >
          <span>Enviar</span>
          <span></span>
        </button>
        {state.succeeded
          ? "Mensaje enviado!"
          : ""}
        <div className="mensaje-form">
          <strong>
            * No dudes en consultarme, te estare respondiendo a la brevedad *
          </strong>
        </div>
      </form>
    </section>
  );
};
