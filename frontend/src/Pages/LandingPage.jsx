import { useNavigate } from "react-router-dom";
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
          <h1 className="titrelanding">Découvrez la Révolution de la Mise en Relation Étudiant-Entreprise !</h1>
          <div className="paragraphe">Bienvenue sur notre plateforme innovante, le premier site de mise en relation exclusivement dédié aux étudiants et aux entreprises. Nous sommes fiers de présenter un concept novateur qui bouleverse les règles du jeu : chez nous, ce sont les entreprises qui viennent à la rencontre des talents étudiant.</div>
        </div>
        <div className="landingBtnContenair"><button id="student">Etudiant</button><button id="compagny">Entreprise</button></div>
    </div>
    <div className="containerlanding2">
   
     <div className="slach"></div>
     <div className="whiteslachinvisible"></div>
     <div className="blackslachinvisible"></div>
     <img src={blob1} className="blob1" alt="" srcset="" />
      <img src={blob2} className="blob2" alt="" srcset="" />

      <div className="cardcontenaire">
       
          <div className="card_info"></div>
        
    
      
          <div className="card_info"></div>
         

          <div className="card_info"></div>
          

      </div>
    
    </div>
    </>
  );
}
