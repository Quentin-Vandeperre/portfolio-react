import React from 'react'
import '../styles/modal.css'
import img from '../img/CaptureSiteLivre.png'
import img1 from '../img/CaptureAjoutLivre.png'
import img2 from '../img/CaptureInfoLivre.png'

export default function Project4({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className="backgroundModal">
      </div>
      <div className="divModal">
        <button className= "buttonCloseModale" onClick={closeModal}>
            X
        </button>
        <div class="pictureAndInfoProject">
            <img src={img} alt="picturePortfolio" class="picturePrincipalModal"/>
            <div class="infoProjectBooki">
                <h1 class="titleModal">Site notation de livre</h1>
                <p class="mission">
                    Mission: 
                </p>
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
            <img src={img1} alt="picturePortfolio" class="pictureSecondaireModal"/>
            <img src={img2} alt="picturePortfolio" class="pictureSecondaireModal"/>
        </div>
      </div>
    </>
  )
}