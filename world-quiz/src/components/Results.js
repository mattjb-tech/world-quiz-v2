import React from "react";

function Results({answers, questions, onRestart}) {
    const correctCount = answers.reduce((acc, answer, i) => {
        if (!answer) return acc;
        return answer.toLowerCase() === questions[i].capital.toLowerCase() ? acc + 1 : acc;
    }, 0);

    return (
        <div className="results-card fade-in">
            <h1>Your Results</h1>
            <p>You got <strong>{correctCount}</strong> out of <strong>{questions.length}</strong> correct!</p>

            <ul className="results-list">
                {questions.map((q, index) => {
                    const isCorrect = answers[index] && answers[index].toLowerCase() === q.capital.toLowerCase();
                    return (
                        <li key={q.name} className={isCorrect ? 'correct' : 'wrong'}>
                            <strong>{q.name}</strong> - Your answer: <em>{answers[index] || 'Skipped'}</em> | Correct: <em>{q.capital}</em>
                        </li>
                    )
                })}
            </ul>

            <button className="restart-btn" onClick={onRestart}>
                Try again
            </button>
        </div>
    );
}

export default Results;