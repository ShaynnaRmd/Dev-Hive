import React, { useState } from 'react';
import { quizQuestions } from '../assets/quizzliste';

const QuizComponent = (language) => {
    
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [dis,setDis]=useState({pointerEvents:'auto'})
  const [questions, setQuestions] = useState(quizQuestions[language.language])
  const totalQuestions = questions.length;

  const handleAnswerClick = (answer) => {
    setDis({pointerEvents:'none'})
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setSelectedAnswer('correct');
      setScore(score + 1);
      // Ajouter une animation spéciale pour une réponse correcte
    } else {
      setSelectedAnswer('incorrect');
    }

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions ) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
        setDis({pointerEvents:'auto'})
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        alert(`Fin du quiz ! Votre score : ${score}/${totalQuestions}`);
        setDis({pointerEvents:'auto'})
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

  return (<>
  
<div className="quiz-container">
      <div className="progress-bar"  style={{ width: `${progressPercentage}%` }}></div>
      {currentQuestionIndex < 10? <div className="question">{questions[currentQuestionIndex].quiz}</div> :<>Votre score est de {score}</>}
      {currentQuestionIndex < 10?   <div className="answers">
        {['A', 'B', 'C'].map((option) => (
          <button style={dis} key={option} className={getButtonClass(option)} onClick={() => handleAnswerClick(option)}>
            <p className="p">{questions[currentQuestionIndex][`reponse${option}`]}</p>
          </button>
        ))}
      </div>:<button className='continuerquizz'>Continuer</button>}
      <div className="progress-info">
        Question {currentQuestionIndex } sur {totalQuestions}
      </div>
    </div></>

    
  );
};

export default QuizComponent;
