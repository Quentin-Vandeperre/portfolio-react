import React from 'react'
import '../styles/modal.css'
import img from '../img/CaptureBookiLarge.png'

export default function Project1({closeModal}) {
  return (
    <>
      <div onClick={closeModal} className="backgroundModal">
      </div>
      <div className="divModal">
        <button className= "buttonCloseModale" onClick={closeModal}>
            X
        </button>
        <div class="pictureAndInfoProject">
            <img src={img} alt="pictureBooki" class="picturePrincipalModal"/>
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
                <p class="lienSite"><a href="https://quentin-vandeperre.github.io/Booki-2024/">Visiter le site</a></p>
            </div>                    
        </div>
      </div>
    </>
  )
}