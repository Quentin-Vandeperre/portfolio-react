import React from 'react'
import '../styles/modal.css'

export default function Project4({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className="backgroundModal">
      </div>
      <div className="divModal">
      <div class="pictureAndInfoProject">
                            {/* <img src="img/CaptureSiteLivre.png" alt="picturePortfolio" class="picturePrincipalModal"> */}
                            <div class="infoProjectBooki">
                                <h1 class="titleModal">Site notation de livre</h1>

                                <div class="mission">
                                    Mission: 
                                </div>
                                <div class="divDescriptionProjetPortfolio">
                                    <p>
                                        Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse web.
                                    </p>
                                    <ul>
                                        <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                                        <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                                        <li>Stocker des données de manière sécurisée</li>
                                    </ul>
                                    <ul class="ulSkill">
                                        <li class="liSkill">Node.js</li>
                                        <li class="liSkill">Express</li>
                                        <li class="liSkill">MongoDB</li>
                                    </ul>
                                    <p class="lienGitHub"><a href="https://github.com/Quentin-Vandeperre/Site-livre">GitHub</a></p>
                                </div>
                            </div>
                            {/* <img src="img/CaptureAjoutLivre.png" alt="picturePortfolio" class="pictureSecondaireModal">
                            <img src="img/CaptureInfoLivre.png" alt="picturePortfolio" class="pictureSecondaireModal"> */}
                        </div>
        <button className= "buttonCloseModale" onClick={closeModal}>
          X
        </button>
      </div>
    </>
  )
}