import React from 'react'
import '../styles/modal.css'
import img from '../img/CaptureKasa.png'
import img1 from '../img/CaptureRentalSheet.png'
import img2 from '../img/CaptureAbout.png'

export default function Project3({closeModal}) {
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
                <h1 class="titleModal">Kasa</h1>
                <p class="mission">
                    Mission: 
                </p>
                <div class="divDescriptionProjetPortfolio">
                    <p>
                        Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse web.
                    </p>
                    <ul>
                        <li>Développer une interface web avec Sass</li>
                        <li>Initialiser une application avec Create React App</li>
                        <li>Configurer la navigation entre les pages de l'application avec React Router</li>
                        <li>Développer des éléments de l'interface d'un site web grâce à des composants React</li>
                        <li>Mettre en œuvre des animations CSS</li>
                    </ul>
                    <ul class="ulSkill">
                        <li class="liSkill">HTML</li>
                        <li class="liSkill">SASS</li>
                        <li class="liSkill">JavaScript</li>
                        <li class="liSkill">React</li>
                    </ul>
                    <p class="lienGitHub"><a href="https://github.com/Quentin-Vandeperre/kasas">GitHub</a></p>
                </div>
            </div>
            <img src={img1} alt="picturePortfolio" class="pictureSecondaireModal"/>
            <img src={img2} alt="picturePortfolio" class="pictureSecondaireModal"/>
        </div>
      </div>
    </>
  )
}