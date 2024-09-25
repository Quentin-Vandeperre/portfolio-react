import React from 'react'
import '../styles/modal.css'
import img from '../img/CapturePortfolioLarge.png'
import img1 from '../img/CaptureLogin.png'
import img2 from '../img/CaptureSuppimer.png'
import img3 from '../img/CaptureAjouter.png'

export default function Project2({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className="backgroundModal">
      </div>
      <div className="divModal">
      <div class="pictureAndInfoProject">
                            <img src={img} alt="picturePortfolio" class="picturePrincipalModal"/>
                            <div class="infoProjectBooki">
                                <h1 class="titleModal">Portfolio Architecte</h1>

                                <div class="mission">
                                    Mission: 
                                </div>
                                <div class="divDescriptionProjetPortfolio">
                                    <p>
                                        Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse web.
                                    </p>
                                    <ul>
                                        <li>Récupération des projets et des filtres d'une API</li>
                                        <li>Création de la page login, avec récupération du token de connection</li>
                                        <li>Création d'une première modale pour supprimer un projet</li>
                                        <li>Création d'une deuxième modale pour ajouter un projet</li>
                                    </ul>
                                    <ul class="ulSkill">
                                        <li class="liSkill">HTML</li>
                                        <li class="liSkill">CSS</li>
                                        <li class="liSkill">JavaScript</li>
                                    </ul>
                                    <p class="lienGitHub"><a href="https://github.com/Quentin-Vandeperre/https---github.com-Quentin-Vandeperre-portfolio-architecte">GitHub</a></p>
                                </div>
                            </div>
                            <img src={img1} alt="picturePortfolio" class="pictureSecondaireModal"/>
                            <img src={img2} alt="picturePortfolio" class="pictureSecondaireModal"/>
                            <img src={img3} alt="picturePortfolio" class="pictureSecondaireModal"/>
                        </div>
        <button className= "buttonCloseModale" onClick={closeModal}>
          X
        </button>
      </div>
    </>
  )
}



