import React from 'react';

import Modal from './Modal';

const ModalOne = ({ closeFn = () => null, open = true }) => {
return (
    <Modal open={open}>
        <div className="modal--mask">
        <div className="modal-window">
        <button type="button" onClick={closeFn}>
              Close
            </button>
        <div class="pictureAndInfoProject">
                            {/* <img src="img/CaptureBookiLarge.png" alt="pictureBooki" class="picturePrincipalModal"> */}
                            <div class="infoProjectBooki">
                                <h1 class="titleModal">Booki</h1>

                                <div class="mission">
                                    Mission: 
                                </div>
                                <div>
                                    <p>
                                        Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse web.
                                    </p>
                                    <p>
                                        Développement du front-end du site de location d’hébergements Booki.
                                    </p>
                                </div>
                                <ul class="ulSkill">
                                    <li class="liSkill">HTML</li>
                                    <li class="liSkill">CSS</li>
                                </ul>
                                <a href="https://quentin-vandeperre.github.io/Booki-2024/" class="visitSite">Visiter le site</a>
                            </div>
                            
                        </div>
        </div>
      </div>



    
                </Modal>
);
}
export default ModalOne;