import React from 'react'
import './QuizView.css'

const QuizView = ({questions, currectQuestion, handleAnswerClick})=> {
    return (
    <>

        <div className='question'>
            <div className='question-number'>
                <span>{currectQuestion + 1} / {questions.length}</span>
            </div>
            <div className='question-text'>{questions[currectQuestion].question}</div>
        </div>

        <div className='answer'>
            {questions[currectQuestion].answers.map(({text, isCorrect})=> (
                <button key={text} onClick={() => handleAnswerClick(isCorrect)}>{text}</button>
            ))}
            
        </div>
        
        
    </>
    )
}

export default QuizView