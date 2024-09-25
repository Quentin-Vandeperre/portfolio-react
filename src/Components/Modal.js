import React, { useState } from "react"
import { createPortal } from "react-dom"

import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"

import img1 from '../img/CaptureBooki.png'
import img2 from '../img/CapturePortfolio.png'
import img3 from '../img/CaptureKasa.png'
import img4 from '../img/CaptureSiteLivre.png'

import '../styles/modal.css'


export default function ModalButton() {
  const [activeModal, setActiveModal] = useState(null); // null signifie aucun modal n'est ouvert

  
  const images = [
    img1, // Remplace par le chemin de ton image
    img2,
    img3,
    img4
  ];

  // Créer un tableau de 4 boutons avec des images différentes
  const buttons = images.map((imageSrc, index) => (
    <button
      key={index}
      className="buttonOpenModal"
      onClick={() => setActiveModal(index + 1)} // Ouvre le modal correspondant à l'index
    >
      <img src={imageSrc} alt={`Button image ${index + 1}`} />   
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