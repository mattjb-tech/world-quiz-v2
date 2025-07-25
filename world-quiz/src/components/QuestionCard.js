import React, {useState} from "react"
import countries from '../data/info.json'

function QuestionCard({question, onNext}){
    const [userAnswer, setUserAnswer] = useState('')

    const handleNext = () => {
        onNext(userAnswer.trim())
        setUserAnswer('')
    }

    const handleKeyDown = (e) => { //so we can just type enter instead of using the mouse
        if (e.key === 'Enter') handleNext()
    }

    return (
        <div className="question-card">
            <h2>What's the capital of <span className="highlight">{question.name}</span>?</h2>

            <input type="text" value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyDown} placeholder="Type your answer here..."
            className="answer-input" autoFocus />

            <div className="buttons"> {/*my idea is to add a skip and a go back buttons*/}
                <button onClick={handleNext} disabled={userAnswer.trim()===''} className="next-btn">
                    Next
                </button>
            </div>
        </div>
    )
}

export default QuestionCard