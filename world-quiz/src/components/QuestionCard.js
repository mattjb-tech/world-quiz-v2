import React, { useState, useEffect } from "react"

function QuestionCard({ question, onNext, onBack, userAnswer, currentIndex, isLastQuestion }) {
  const [userInput, setUserInput] = useState(userAnswer || "") //holds the users current input for this question

  useEffect(() => { //every time the userAnswer prop changes (like when going back), update the input field
    setUserInput(userAnswer || "")
  }, [userAnswer])

  const handleNext = () => { //handles the next btn
    onNext(userInput.trim()) //sends input back
    setUserInput("") //resets input for next question
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleNext();
  }

  const handleSkip = () => {
    onNext("")
    setUserInput("")
  }

  return (
    <div className="question-card">
      <h2>
        What's the capital of <span className="highlight">{question.name}</span>?
      </h2>

      <input
        type="text"
        value={userInput}
        maxLength={30}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your answer here..."
        className="answer-input"
        autoFocus
      />

      <div className="buttons">
        <button
          onClick={onBack}
          className="back-btn"
          disabled={currentIndex === 0}>
          Back
        </button>

        <button onClick={handleSkip} className="skip-btn" disabled={isLastQuestion}>
          Skip
        </button>

        <button
          onClick={handleNext}
          disabled={userInput.trim() === ""}
          className="next-btn">
          Next
        </button>
      </div>
    </div>
  )
}

export default QuestionCard;