import React from 'react'

export default function ModalContent({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className='fixed inset-0 bg-slate-800/75'>
      </div>
      <div className="divModal">
        <p>Here is the content</p>
        <button className= "buttonCloseModale" onClick={closeModal}>
          X
        </button>
      </div>
    </>
  )
}