import { useNavigate } from "react-router-dom";
import React from "react";
import "../assets/css/landing.css";
import blob1 from "../assets/svg/blob1.svg";
import blob2 from "../assets/svg/blob2.svg";

export function LandingPage() {
  const navigate = useNavigate();

  const Navigation = (e) => {
    e.preventDefault();
    const id = e.target.id;
    navigate(`register/${id}`);
  };

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
        <div className="cardcontenaire">
          <div className="card_info">
            <h2> Une Approche Inversée </h2>
            <p>
              {" "}
              Contrairement aux autres plateformes, ici, ce sont les entreprises
              qui initient le contact. Elles peuvent parcourir les profils
              d'étudiants, découvrir leurs compétences et leurs aspirations,
              puis les inviter à rejoindre leurs équipes. C'est un moyen
              efficace et direct de trouver les talents qui correspondent
              parfaitement à leurs besoins.
            </p>
          </div>

          <div className="card_info">
            <h2>Des Opportunités Personnalisées</h2>
            <p>
              {" "}
              Chaque entreprise peut affiner sa recherche en fonction de
              critères spécifiques tels que les compétences techniques, les
              domaines d'études, l'expérience professionnelle, etc. Cela
              garantit des correspondances précises et des opportunités
              personnalisées pour les étudiants.
            </p>
          </div>

          <div className="card_info">
            <h2> Un Accès Facile et Rapide</h2>
            <p>
              Notre interface conviviale permet aux entreprises de naviguer en
              toute simplicité et de trouver les profils d'étudiants qui
              répondent à leurs exigences. En quelques clics, elles peuvent
              envoyer des invitations et entrer en contact avec les futurs
              leaders de demain.
            </p>
          </div>
        </div>
        <div className="landingBtnContenair">
          <button id="student">connecter vous</button>
        
        </div>
      </div>
    </>
  );
}
