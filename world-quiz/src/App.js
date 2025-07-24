import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'
import Conditions from './components/Conditions'
import QuestionCard from './components/QuestionCard'
import Results from './components/Results'

//Updated to add in the Conditions component <3

function App() {
  const [step, setStep] = useState('welcome')
  const setConditions = () => setStep('conditions')
  const setQuiz = () => setStep('quiz')

// Data for the quiz conditions
  const [conditionList, setConditionList] = useState({ 
    region: 'all',
    question_count: 10
  });
// I'll pass it to the Conditions component as a prop below

  return (
    <div className='app'>
      {step === 'welcome' && <WelcomeScreen onStart={setConditions} />} {/*if step = welcome, onstart lets us set the conditions, else it does nothing*/}
      
      {step === 'conditions' && (
        <div className="wrapper">
          <Conditions 
            data={conditionList} 
            updateData={setConditionList} 
            onStart={setQuiz}
          />
        </div>
      )}

    </div>
  );
}

export default App;