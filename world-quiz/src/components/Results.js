function Results({answers, questions, onRestart}){
    
  const results = questions.map(({ name, capital }, index) => {
    //First, we connect each question to their answer, and figure out if they got it right
    const answer = answers[index];
    return {
      Country: name,
      Capital: capital,
      Answer: answer,
      Correct: answer === capital ? '✅' : '❌'
    };
  });
    //Store it in the console to bug check
    console.log(results);
    //Calculate the percentage they got right 
    const correctCount = results.filter(r => r.Correct === '✅').length;
    const percentage = (correctCount / results.length) * 100;

    return (
        <div className='results'>
            <h3>You scored: {correctCount} / {results.length} = {percentage.toFixed(2)} %</h3>

            <div className='container'>
              {results.map((result, index) => (
                <div key={index} className={result.Correct === '✅' ? 'correct' : 'incorrect'}>
                  {/*Each correct answer has className 'correct'*/}
                  {/*Each wrong answer has className 'incorrect'*/}
                  <p className='questionbox'>What is the capital of {result.Country}?</p>
                  <p className='answerbox'>
                    Answer: {result.Capital} <br />
                    You said: {result.Answer} {result.Correct}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={onRestart} className="restart">
                New Quiz
            </button>
        </div>
    )
}

export default Results