import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";
import './App.css'
import { useState } from "react";

function App() {

  const questions = [
    {
      question: "Richest Country In The World by GDP?",
      answers: [{ text: "China" }, { text: "India" }, { text: "USA", isCorrect: true }, {text: 'UK'}],
    },
    {
      question: "What is The Full Form of IPO?",
      answers: [
        { text: "Initial People Offering" },
        { text: "Initial Public Offering", isCorrect: true },
        { text: "Individual People Offering" },
        { text: "Individual Public Offering" },
      ],
    },
    {
      question: "Country With Most No Of Companies Listed On Stock Market?",
      answers: [
        { text: "USA" },
        { text: "China" },
        { text: "Germany" },
        { text: "India", isCorrect: true },
      ],
    },
    {
      question: "Richest Cricket Board In The World?",
      answers: [
        { text: "ECB" },
        { text: "BCCI", isCorrect: true },
        { text: "PCB" },
        { text: "CSA" },
      ],
    },
    {
      question: "Richest Cricketer In The World?",
      answers: [
        { text: "Sachin Tendulkar", isCorrect: true },
        { text: "Virat Kohli" },
        { text: "MS Dhoni" },
        { text: "Rohit Sharma" },
      ],
    },
  ];

  const [currectQuestion, setCurrentQuestion] = useState(0)
  const[isQuizOver, setIsQuizOver] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score+1)

    const next = currectQuestion + 1
    if (next<questions.length)
    setCurrentQuestion(next)
    else setIsQuizOver(true)
  }

  const handleResetClick = ()=> {
    setCurrentQuestion(0)
    setIsQuizOver(false)
    setScore(0)
  }

  return (
    <div className='App'>
      {isQuizOver ? ( <ScoreView handleResetClick={handleResetClick} score={score}/>) :   
      (<QuizView questions={questions} currectQuestion={currectQuestion} handleAnswerClick={handleAnswerClick}/>)
}
    
    </div>
  )
}


export default App;
