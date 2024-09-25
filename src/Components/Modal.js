import React, { useState } from "react"
import { createPortal } from "react-dom"

import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import '../styles/modal.css'


export default function ModalButton() {
  const [activeModal, setActiveModal] = useState(null); // null signifie aucun modal n'est ouvert

  // Créer un tableau de 4 boutons
  const buttons = Array.from({ length: 4 }, (_, index) => (
    <button
      key={index}
      className="buttonOpenModal"
      onClick={() => setActiveModal(index + 1)} // Ouvre le modal correspondant à l'index
    >
      Open Modal {index + 1}
    </button>
  ));

  const renderModalContent = () => {
    switch (activeModal) {
      case 1:
        return <Project1 closeModal={() => setActiveModal(null)} />;
      case 2:
        return <Project2 closeModal={() => setActiveModal(null)} />;
      case 3:
        return <Project3 closeModal={() => setActiveModal(null)} />;
      case 4:
        return <Project4 closeModal={() => setActiveModal(null)} />;
      default:
        return null;
    }
  };

  return (
    <>
      {buttons}
      {activeModal && createPortal(renderModalContent(), document.body)}
    </>
  );
}