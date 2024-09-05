import './App.css';

import "./App.css";
import Modal from './Components/Modal'
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/modal1" element={<ModalPage index={1} ModalComponent={Project1} />} />
        <Route path="/modal2" element={<ModalPage index={2} ModalComponent={Project2} />} />
        <Route path="/modal3" element={<ModalPage index={3} ModalComponent={Project3} />} />
        <Route path="/modal4" element={<ModalPage index={4} ModalComponent={Project4} />} />
      </Routes>
    </Router>
  );
}

function ModalPage({ index, ModalComponent }) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return modal && <ModalComponent toggleModal={toggleModal} />;
}

export default App;
