import React, { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import Conditions from './components/Conditions'
import QuestionCard from './components/QuestionCard'
import countries from './data/info.json'
import Results from './components/Results'

function App() {
  const [step, setStep] = useState('welcome') //storing the steps

  const setConditions = () => setStep('conditions') //moving to conditions

  const startQuiz = () => { //shuffles the filtered questions before starting the quiz
    let shuffled = finalQuestions

    setQuizQuestions(shuffled)
    setStep('quiz')
  }

  const [currentIndex, setCurrentIndex] = useState(0) //storing question index
  const [userAnswers, setUserAnswers] = useState([]) //storing users answers

  const [conditionList, setConditionList] = useState({ //initial values for conditions
    region: 'all',
    difficulty: 'all',
    question_count: 10
  })

  const [quizQuestions, setQuizQuestions] = useState([]) //stores the quiz questions bc if i dont the results wont make sense lol trust me


  const filterByRegion = countries //filters by region
    .filter(q => conditionList.region === 'all' || q.region === conditionList.region)

  const filteredQuestions = filterByRegion //then filters by difficulty
    .filter(q => conditionList.difficulty === 'all' || q.difficulty === conditionList.difficulty);

  const fallback = countries.filter(q => //if there aren't enough questions
  (conditionList.region === 'all' || q.region === conditionList.region) &&
  !filteredQuestions.includes(q)
);

  const shuffleArray = (array) => { //just shuffles the original set of countries
    return [...array].sort(() => Math.random() - 0.5)
  }

  const finalQuestions = [
    ...shuffleArray(filteredQuestions),
    ...shuffleArray(fallback)
  ].slice(0, conditionList.question_count);



  const handleNext = (answer) => { //stores each answer
    setUserAnswers((prev) => {  //takes the previous state and add new answer to it
      const newAnswers = [...prev]
      newAnswers[currentIndex] = answer //adds the new answers
      return newAnswers
    })

    const nextIndex = currentIndex + 1 //i dont need to explain this lol
    if (nextIndex < quizQuestions.length) {
      setCurrentIndex(nextIndex)
    } else setStep('results')
  }

  const handleBack = () => { //back button
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const restartQuiz = () => { //restart quiz
    setUserAnswers([])
    setCurrentIndex(0)
    setStep('welcome')
  }

  return (
    <div className='app'>
      {step === 'welcome' && <WelcomeScreen onStart={setConditions} />}

      {step === 'conditions' && (
        <div className="wrapper">
          <Conditions
            data={conditionList}
            updateData={setConditionList}
            onStart={startQuiz}
          />
        </div>
      )}

      {step === 'quiz' && quizQuestions.length > 0 && (
        <div className="wrapper">
          <QuestionCard
            question={quizQuestions[currentIndex]}
            onNext={handleNext}
            onBack={handleBack}
            userAnswer={userAnswers[currentIndex] || ''}
            currentIndex={currentIndex}
            isLastQuestion={currentIndex === finalQuestions.length -1}
          />
        </div>
      )}

      {step === 'results' && (
        <div className="wrapper">
           <div className="scroll-wrapper">
            <Results
              answers={userAnswers}
              questions={quizQuestions}
              onRestart={restartQuiz}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App