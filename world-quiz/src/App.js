import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'
import Conditions from './components/Conditions'
import QuestionCard from './components/QuestionCard'
import Results from './components/Results'

// I've set it up so that the conditions component renders when the button is clicked.
// We'll have to edit the {step === conditions ... } part later on when we're done with this component.
// to add an onStart for the QuestionCards.
// But for now, we can begin designing the Conditions component, and testing how it looks on screen.

function App() {
  const [step, setStep] = useState('welcome')
  const setConditions = () => setStep('conditions')
  return (
    <div className='app'>
      {step === 'welcome' && <WelcomeScreen onStart={setConditions} />} {/*if step = welcome, onstart lets us set the conditions, else it does nothing*/}
      {step === 'conditions' && <Conditions />} {/*if step = conditions, render the conditions component instead.*/}
    </div>
  );
}

export default App;