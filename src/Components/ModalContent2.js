import React from 'react'
import '../styles/modal.css'

export default function ModalContent({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className="backgroundModal">
      </div>
      <div className="divModal">
        <p>Here is the content 2</p>
        <button className= "buttonCloseModale" onClick={closeModal}>
          X
        </button>
      </div>
    </>
  )
}