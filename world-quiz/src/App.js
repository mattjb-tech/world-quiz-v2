import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'
import Conditions from './components/Conditions'
import QuestionCard from './components/QuestionCard'
import Results from './components/Results'

//Updated to include the Conditions component. For now, it doesn't have an 'onStart'
// but we can add that later on when the component is closer to finished.

function App() {
  const [step, setStep] = useState('welcome')
  const setConditions = () => setStep('conditions')

// Because we're using React, our data has to start at the top level if we need multiple components to use it.
// Then, we can pass it to individual components as a prop later.

  const [conditionList, setConditionList] = useState({ 
    region: 'all',
    question_count: 10
  });


  return (
    <div className='app'>
      {step === 'welcome' && <WelcomeScreen onStart={setConditions} />} {/*if step = welcome, onstart lets us set the conditions, else it does nothing*/}
      
      {step === 'conditions' && <Conditions data={conditionList} 
      updateData={setConditionList} />} 
    </div>
  );
}

export default App;