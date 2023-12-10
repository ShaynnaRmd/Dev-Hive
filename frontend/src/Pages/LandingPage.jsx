import { useNavigate } from "react-router-dom";
import React from "react";
import "../assets/css/landing.css";
import blob1 from "../assets/svg/blob1.svg";
import blob2 from "../assets/svg/blob2.svg";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="containerlanding1">
        <img src={blob1} className="blob1" alt="" srcset="" />
        <img src={blob2} className="blob2" alt="" srcset="" />

        <div className="containerOfLandingPage">
          <h1 className="titrelanding">
            Découvrez la <span>Révolution</span> de la Mise en Relation{" "}
            <span>Étudiant-Entreprise !</span>{" "}
           
     
   
 
          </h1>
          <div className="paragraphe">
            Bienvenue sur notre plateforme innovante, le premier site de mise en
            relation exclusivement dédié aux étudiants et aux entreprises. Nous
            sommes fiers de présenter un concept novateur qui bouleverse les
            règles du jeu : chez nous, ce sont les entreprises qui viennent à la
            rencontre des talents étudiant.
          </div>
        </div>
        <div className="landingBtnContenair">   <button id="student" onClick={() => navigate("/login")}>
            Connexion
          </button>
          <button id="student" onClick={() => navigate("/register")}>
            Inscription
          </button>     </div>
        <div className="cardcontenaire">
          <div className="card_info">
          
            <p>
              {" "}
              Contrairement aux autres plateformes, ici, ce sont les entreprises
              qui initient le contact. 
            </p>
          </div>

          <div className="card_info">
           
            <p>
              {" "}
              Chaque entreprise peut affiner sa recherche en fonction de
              critères spécifiques tels que les compétences techniques.
            </p>
          </div>

          <div className="card_info">
          
            <p>
              Notre interface conviviale permet aux entreprises de naviguer en
              toute simplicité et de trouver les profils d'étudiants.
            </p>
          </div>
        </div>
      
      </div>
    </>
  );
}
