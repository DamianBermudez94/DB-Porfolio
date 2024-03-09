import { ListadoTrabajos } from "../components/Proyectos/ListaTrabajos";
import Modal from 'react-modal';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export const Proyectos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

const abrirModal = () => {
  setModalIsOpen(true);
};

const cerrarModal = () => {
  setModalIsOpen(false);
};

return (
  <div>
    <button onClick={abrirModal}>Abrir Modal</button>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={cerrarModal}
      contentLabel="Ejemplo de Modal"
    >
     <div>
      <h1 className="title-proyectos">Proyectos</h1>
      <section className="section-proyectos">
        <ListadoTrabajos />
      </section>
    </div>
    </Modal>
  </div>
);
};
