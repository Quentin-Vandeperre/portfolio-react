import React, { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
export default function ModalButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className="buttonOpenModal"
      onClick={() => setShowModal(true)}>Open the modal</button>
      {showModal && createPortal(
        <ModalContent closeModal={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // import React from 'react';

// function Home() {
//   const navigate = useNavigate();

//   const openModal = (index) => {
//     navigate(`/modal${index}`);
//   }

//   const [modals, setModals] = useState([false, false, false, false]);

//   const toggleModal = (index) => {
//     setModals((prevModals) =>
//       prevModals.map((modal, i) => (i === index ? !modal : modal))
//     );
//   };
//     return (
//       <><div>
//         {[1, 2, 3, 4].map((index) => (
//           <button key={index} onClick={() => openModal(index)}>
//             Open Modal {index}
//           </button>
//         ))}
//       </div>

//       <div>
//           {modals.map((modal, index) => (
//             <div key={index}>
//               <button onClick={() => toggleModal(index)} className={`modal-${index + 1}`}>

//               </button>
//                 {modal && (
//                 <div className="modal">
//                   <div onClick={() => toggleModal(index)} className="overlay"></div>
//                   <div className="modal-content">
                    
//                     <button
//                       className="close-modal"
//                       onClick={() => toggleModal(index)}
//                     >
//                       CLOSE
//               </button>


//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div></>


//     // <div>
//     //   <button onClick={() => openModal(1)}>Open Modal 1</button>
//     //   <button onClick={() => openModal(2)}>Open Modal 2</button>
//     //   <button onClick={() => openModal(3)}>Open Modal 3</button>
//     //   <button onClick={() => openModal(4)}>Open Modal 4</button>
//     // </div>

    

//   );
// }

// export default Home;
