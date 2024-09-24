import React from 'react';


import ModalOne from './Components/Project1';
import ModalTwo from './Components/Project2';
import ModalThree from './Components/Project3';
import ModalFour from './Components/Project4';

const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === 'modal-one'} />
      <ModalTwo closeFn={closeFn} open={modal === 'modal-two'} />
      <ModalThree closeFn={closeFn} open={modal === 'modal-three'} />
      <ModalFour closeFn={closeFn} open={modal === 'modal-three'} />
    </>
  );
};

export default ModalManager;