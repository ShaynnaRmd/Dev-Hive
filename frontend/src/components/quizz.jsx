import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../assets/quizzliste';
import { useParams, useNavigate } from 'react-router-dom';

const QuizComponent = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [dis, setDis] = useState({ pointerEvents: 'auto' });
  const [questions, setQuestions] = useState( quizQuestions["null"]);
  const totalQuestions = 10;
  const { Quizz } = useParams();
  const [estVisible, setEstVisible] = useState(false);

  useEffect(() => {
    if (Quizz !== undefined) {
      console.log(Quizz);
      if (quizQuestions.hasOwnProperty(Quizz)) {
        setEstVisible(true);
        setQuestions(quizQuestions[Quizz]);
      } else {
        setEstVisible(false);
        setQuestions(quizQuestions["null"])
      }
    } else {
      setEstVisible(false);
      setQuestions(quizQuestions["null"])
    
    }
  }, [Quizz]);

  const handleAnswerClick = (answer) => {
    setDis({ pointerEvents: 'none' });
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setSelectedAnswer('correct');
      setScore(score + 1);
    } else {
      setSelectedAnswer('incorrect');
    }

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
        setDis({ pointerEvents: 'auto' });
      } else {
        alert(`Fin du quiz ! Votre score : ${score}/${totalQuestions}`);
        setDis({ pointerEvents: 'auto' });
      }
    }, 500); // Durée d'affichage de l'animation
  };

  const getButtonClass = (answer) => {
    if (selectedAnswer === 'correct' && answer === questions[currentQuestionIndex].correctAnswer) {
      return 'answer-button correct animate-correct';
    } else if (selectedAnswer === 'incorrect') {
      return 'answer-button incorrect';
    } else {
      return 'answer-button';
    }
  };

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <>
      {estVisible || totalQuestions == null  ? (
        <div className="quiz-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          {currentQuestionIndex < totalQuestions ? (
            <div className="question">{questions[currentQuestionIndex].quiz}</div>
          ) : (
            <>Votre score est de {score}/{totalQuestions}</>
          )}
          {currentQuestionIndex < totalQuestions ? (
            <div className="answers">
              {['A', 'B', 'C'].map((option) => (
                <button
                  style={dis}
                  key={option}
                  className={getButtonClass(option)}
                  onClick={() => handleAnswerClick(option)}
                >
                  <p className="p">{questions[currentQuestionIndex][`reponse${option}`]}</p>
                </button>
              ))}
            </div>
          ) : (
            <button className="continuerquizz">Continuer</button>
          )}
          <div className="progress-info">
            Question {currentQuestionIndex + 1} sur {totalQuestions}
          </div>
        </div>
      ) : (
        <div className="Nothing">Pas de quizz disponible</div>
      )}
    </>
  );
};

export default QuizComponent;
