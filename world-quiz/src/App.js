import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'
import Conditions from './components/Conditions'
import QuestionCard from './components/QuestionCard'
import countries from './data/info.json'
import Results from './components/Results'

//Updated to add in the Conditions component <3

function App() {
  const [step, setStep] = useState('welcome')

  const setConditions = () => setStep('conditions')
  const setQuiz = () => setStep('quiz')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

// Data for the quiz conditions
  const [conditionList, setConditionList] = useState({ 
    region: 'all',
    question_count: 10
  });
// I'll pass it to the Conditions component as a prop below


// here ill see which region does the user want
  const filteredQuestions = conditionList.region === 'all' ? countries : countries.filter((q) => q.region === conditionList.region)

  const selectedQuestions = filteredQuestions.slice(0, conditionList.question_count) //im not really sure about this

  const handleNext = (answer) => {
    setUserAnswers([...userAnswers, answer])
    const nextIndex = currentIndex + 1
    if (nextIndex < selectedQuestions.length) {
      setCurrentIndex(nextIndex)
    } else setStep('results')
  }

  return (
    <div className='app'>
      {step === 'welcome' && <WelcomeScreen onStart={setConditions} />}
      
      {step === 'conditions' && (
        <div className="wrapper">
          <Conditions 
            data={conditionList} 
            updateData={setConditionList} 
            onStart={setQuiz}
          />
        </div>
      )}

      {step === 'quiz' && selectedQuestions.length > 0 && (
        <div className='wrapper'>
          <QuestionCard question={selectedQuestions[currentIndex]}
          onNext={handleNext}
          />
        </div>
      )}

      {step === 'results' && <Results answers={userAnswers} questions={selectedQuestions} />}

    </div>
  );
}

export default App;