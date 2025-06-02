// import React from 'react'

// const Quiz = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React, { useState } from "react";
import './Quiz.css'

import topics from '../Assets/topic';
import { useLocation, useNavigate } from "react-router-dom";
const Quiz = () => {
    // console.log(props);
    const location = new useLocation();
    const {props} = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
    console.log(props);
    const navigate=new useNavigate();
  const TopicQuestions = topics.find((topic)=>
    topic.name===props.name)?.questions || [];  
 

 console.log(TopicQuestions);
    const currentQuestion = TopicQuestions[currentIndex];
  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < TopicQuestions.length) {

      setCurrentIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };
  const goBack=()=>{
    navigate('/popular');
  }

  return (
    
    <div className="quizQuestions">
        {/* console.log(props); */}
      
      {showScore ? (
        <>
             <div className="submitPage">
        <h2>{props.name} Quiz</h2>
      <br />
          <h3 className="score">Your score: {score} / {TopicQuestions.length}</h3>
          <button onClick={goBack}>Go Back</button>
          </div>
        </>
      ) : (
        <>
        <h2>{props.name} Quiz</h2>
      <br />
        <div className="qandA">
          <p className="question">
            Q{currentIndex + 1}: {currentQuestion.question}
            <br />
          </p>
          <br />
          {currentQuestion.options.map((option, idx) => (
            <button className='optionBtn' key={idx} onClick={() => handleAnswer(option)}>
              {option} 
            </button>
            // <br>
          ))}
         <div className="buttons">
          <button onClick={() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }}
    disabled={currentIndex === 0}>Previous</button>
          <button
          onClick={() => {
      if (currentIndex < TopicQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowScore(true);
      }
    }}

          >Next</button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;


