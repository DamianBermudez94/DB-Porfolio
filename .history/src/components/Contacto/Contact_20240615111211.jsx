import{ useState } from 'react';
import "./styles.css";

export const Contact = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos a Formspree
    const response = await fetch('https://formspree.io/f/{xrgnnogr}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Mensaje enviado con éxito');
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      alert('Hubo un problema al enviar el mensaje');
    }
  };

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
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
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
          name="email"
          placeholder="Escriba su email..."
          required
        />
        <textarea
          name="asunto"
          id="mensaje"
          placeholder="Deje su mensaje......"
          required
        ></textarea>
        <button
          type="submit"
          className="btn-enviar"
          disabled={state.submitting}
        >
          <span>Enviar</span>
          <span></span>
        </button>
        {state.succeeded ? (<p className="mensaje-ok">Mensaje enviado</p>) : ""}
        <div className="mensaje-form">
          <strong>
            * No dudes en consultarme, te estare respondiendo a la brevedad *
          </strong>
        </div>
      </form>
    </section>
  );
};
