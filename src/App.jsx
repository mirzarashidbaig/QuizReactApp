/* eslint-disable no-unused-vars */

import './App.css'
import { useState } from 'react'

function App() {



  // const [ques, setques] = useState('');
  const [final, setfinal] = useState(false);
  const [Quescount, setQuescount] = useState(0);
  const [score, setscore] = useState(0);

  const optionCliked = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 1);

    }

    if (Quescount + 1 < questions.length) {

      setQuescount(Quescount + 1);
    }
    else {
      setfinal(true);
    }

  }

  const restartquiz = ()=>{
    setscore(0)
    setQuescount(0)
    setfinal(false)
  }
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];



  return (
    <>
      <div className="container">
        <div className="center">
          <div className="header">
            <h1>Quiz App</h1>
          </div>
          <div className="scores">
            <h2>Count Score : {score}</h2>
          </div>
          {
            final ?

              <div className="final">
                <h1>Final Result </h1>
                <h2>{score} out of {questions.length} - ({(score/questions.length)*100}%)</h2>
                <button onClick={()=>restartquiz()}>Restart Quiz</button>
              </div>

              :

              <div className="quizbody">
                <div className="questioncount">
                  <h2> Questions {Quescount + 1}   out of {questions.length} </h2>
                </div>

                <div className="QuestionAns">
                  <h2 >{questions[Quescount].text}</h2>
                  <ul className="list">
                    {questions[Quescount].options.map((CurElem) => {
                      return (
                        <>
                          <li key={CurElem.id} onClick={() => optionCliked(CurElem.isCorrect)}>{CurElem.text}</li>
                        </>
                      )
                    })}
                  </ul>
                </div>
              </div>
          }


        </div>
      </div>
    </>
  )
}

export default App
