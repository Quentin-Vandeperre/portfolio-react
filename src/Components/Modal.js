import React, { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
import '../styles/modal.css'


export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  // Créer un tableau de 4 boutons
  const buttons = Array.from({ length: 4 }, (_, index) => (
    <button
      key={index}
      className="buttonOpenModal"
      onClick={() => setShowModal(true)}
    >
      Open Modal {index + 1}
    </button>
  ));

  return (
    <>
      {buttons}
      {showModal &&
        createPortal(
          <ModalContent closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}