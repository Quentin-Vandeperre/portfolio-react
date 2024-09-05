function Project1() {
    return (
        <aside id="modal3" class="modal">	
                    <div class="modalWrapper3 jsModalStop">
                        <div class="towButton">
                            <button class="returnModal3"><i class="fa-solid fa-arrow-left"></i></button>
                            <button class="jsModalClose3">X</button>
                        </div>
                        <div class="pictureAndInfoProject">
                            {/* <img src="img/CaptureKasa.png" alt="picturePortfolio" class="picturePrincipalModal"> */}
                            <div class="infoProjectBooki">
                                <h1 class="titleModal">Kasa</h1>

                                <div class="mission">
                                    Mission: 
                                </div>
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
                            {/* <img src="img/CaptureRentalSheet.png" alt="picturePortfolio" class="pictureSecondaireModal">
                            <img src="img/CaptureAbout.png" alt="picturePortfolio" class="pictureSecondaireModal"> */}
                        </div>
                        <button class="buttonModalNextProject3">Projet suivant</button>
                    </div>
                </aside>
    );
    }
    
    export default Project1