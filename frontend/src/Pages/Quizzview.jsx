import React,{ useEffect, useState } from 'react';
import langagecss from '../assets/css/languageListe.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export function QuizzView(){
  
    const navigate = useNavigate()
    const couleursClaires = [
        "#F1E5A6",
        "#FFD700",
        "#98FB98",
        "#87CEEB",
        "#FFA07A",
        "#FFE4B5",
        "#00CED1",
        "#FFDAB9",
        "#B0E0E6",
        "#ADD8E6",
        "#F0E68C",
        "#87CEFA",
        "#FFFAF0",
        "#F5DEB3",
        "#F0F8FF"
      ];
      const langage=[  "JavaScript",
      "Python",
      "Java",
      "php",
      "Csharp",
      "Ruby",
      "PHP",
      "Swift",
      "Go",
      "Rust",
      "TypeScript",
      "Node",
    "React"]

      const handlechoice=(e)=>{
        const Quizz=e.target.innerText.toLowerCase()
         setactifQuizz(Quizz)
         navigate(`/quiz/${Quizz}`)
        
    
    }
    
        const [couleur, setCouleur] = useState(null);
        const [quizzActif,setactifQuizz] = useState(null);
    
        const choisirCouleurAleatoire = (e) => {
          const couleurAleatoire = couleursClaires[Math.floor(Math.random() * couleursClaires.length)];
          e.target.style.boxShadow=`inset 300px 0px 0px ${couleurAleatoire }, 0px 2px 30px  rgba(1, 1, 1, 0.123)`
          e.target.style.transform ='scale(1.05)'
          e.target.style.color='rgba(0, 0, 0, 0.429)'
          e.target.style.transition='all 0.5s'
        };
        const leave=(e)=>{
            e.target.style.boxShadow="inset 0px 0px 0px rgba(115, 115, 115, 0.123), 0px 2px 30px  rgba(1, 1, 1, 0)"
            e.target.style.color="rgba(0, 0, 0, 0.692)"
            e.target.style.transition='all 0.5s'
            e.target.style.transform ='scale(1)'
        }
    return (
        <>

       <div  className={langagecss.containerQuizzListe}>
        <h1>Liste des Quizz</h1>
         { langage.map(lang=>(
                <div onClick={handlechoice} onMouseEnter={choisirCouleurAleatoire}
                onMouseLeave={leave}
                className={langagecss.langage}>
                  
                    {lang}
                </div>
         ))
        }
        </div>
        </>
    )
}