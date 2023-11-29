import React, { useState, useEffect } from "react";
import { quizQuestions } from "../functions/quizzliste";
import { useParams, useNavigate } from "react-router-dom";
import OpenAI from "openai";

const QuizComponent = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  async function GptQuizz(langage) {
    console.log("attente de reponse");
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `je suis un assistant qui génère des quiz sur un langage donné et renvoie les questions que sous forme d'objet JavaScript qui peut etre retransformer en code avec Json parse exemple d'objet  a rendre: python: [ { "quiz": "Quel mot-clé crée une fonction en Python ?", "reponseA": "func", "reponseB": "def", "reponseC": "function", "correctAnswer": "B", } ],`,
        },
        {
          role: "system",
          content: `python: [
          {
            "quiz": "Quel mot-clé crée une fonction en Python ?",
            "reponseA": "func",
            "reponseB": "def",
            "reponseC": "function",
            "correctAnswer": "B"
          }
        ]`,
        },
        {
          role: "user",
          content: "Crée un quiz sur le langage HTML.",
        },
        {
          role: "assistant",
          content: `Voici un quiz sur HTML : 
        {
          "quiz": "Quelle balise est utilisée pour créer un lien hypertexte en HTML ?",
          "reponseA": "<link>",
          "reponseB": "<a>",
          "reponseC": "<href>",
          "correctAnswer": "B"
        }`,
        },
        {
          role: "user",
          content: `Crée un tableau js de 5 objet de quizz sur le langage informatique  ${langage}( la reponse doit pouvoir être retransformée en code avec JSON.parse).`,
        },
      ],

      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
    const regex = /\[([\s\S]*?)\]/;
    const correspondance = completion.choices[0].message.content.match(regex);

    if (correspondance) {
      const tableauExtrait = JSON.parse("[" + correspondance[1] + "]");

      setQuestions(tableauExtrait);
      console.log(tableauExtrait);
    } else {
      console.log("Aucun tableau trouvé dans le texte.");
    }

    setEstVisible(true);
  }

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [dis, setDis] = useState({ pointerEvents: "auto" });
  const [questions, setQuestions] = useState(quizQuestions["null"]);
  const [totalQuestions, setTotalQuestion] = useState(5);
  const { Quizz } = useParams();
  const [estVisible, setEstVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (Quizz !== undefined) {
        console.log(Quizz);
        GptQuizz(Quizz);
      } else {
        console.log("erreur");
        setEstVisible(false);
        setQuestions(quizQuestions["null"]);
      }
    }, 500);
  }, []);
  const handleAnswerClick = (answer) => {
    setDis({ pointerEvents: "none" });
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setSelectedAnswer("correct");
      setScore(score + 1);
    } else {
      setSelectedAnswer("incorrect");
    }

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setDis({ pointerEvents: "auto" });
      } else {
        alert(`Fin du quiz ! Votre score : ${score}/${totalQuestions}`);
        setDis({ pointerEvents: "auto" });
      }
    }, 500); // Durée d'affichage de l'animation
  };

  const getButtonClass = (answer) => {
    if (
      selectedAnswer === "correct" &&
      answer === questions[currentQuestionIndex].correctAnswer
    ) {
      return "answer-button correct animate-correct";
    } else if (selectedAnswer === "incorrect") {
      return "answer-button incorrect";
    } else {
      return "answer-button";
    }
  };

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <>
      {estVisible || totalQuestions == null ? (
        <div className="quiz-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
          {currentQuestionIndex < totalQuestions ? (
            <div className="question">
              {questions[currentQuestionIndex].quiz}
            </div>
          ) : score >= 4 ? (
            <>
              Votre score est de {score}/{totalQuestions} BRAVO !!
            </>
          ) : (
            <>
              Votre score est de {score}/{totalQuestions} vous avez échouer il
              vous faut un minimum de 4/5
            </>
          )}
          {currentQuestionIndex < totalQuestions ? (
            <div className="answers">
              {["A", "B", "C"].map((option) => (
                <button
                  style={dis}
                  key={option}
                  className={getButtonClass(option)}
                  onClick={() => handleAnswerClick(option)}
                >
                  <p className="p">
                    {questions[currentQuestionIndex][`reponse${option}`]}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <button
              className="continuerquizz"
              onClick={() => navigate("/quizzview")}
            >
              Continuer
            </button>
          )}
          <div className="progress-info">
            Question {currentQuestionIndex} sur {totalQuestions}
          </div>
        </div>
      ) : (
        <>
          <div className="Nothing">Chargement...</div>
          <div className="surmesure">
            On crée un Quizz sur mesure pour vous 🏗️✨✨
          </div>
        </>
      )}
    </>
  );
};

export default QuizComponent;
