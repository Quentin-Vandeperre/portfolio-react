import Modal from "./Components/Modal"

function App() {

  return (
    <div className="divLineModal">
      <Modal />
    </div>
  )
}

export default App






// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Modal />} />
//         <Route path="/modal1" element={<ModalPage  ModalComponent={Project1}/>} />
//         <Route path="/modal2" element={<ModalPage  ModalComponent={Project2} />} />
//         <Route path="/modal3" element={<ModalPage  ModalComponent={Project3} />} />
//         <Route path="/modal4" element={<ModalPage  ModalComponent={Project4} />} />
//       </Routes>
//     </Router>
//   );
// }

// function ModalPage({ index, ModalComponent }) {
//   const [modal, setModal] = useState(true);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   return modal && <ModalComponent toggleModal={toggleModal} />;
// }

// export default App;
