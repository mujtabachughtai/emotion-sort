// Import the React and useState hook from the React package
import React, { useState } from 'react';

// Import the CSS file for styling this component
import './App.css';

// Import the custom components
import InputComponent from './InputComponent';
import InstructionsComponent from './InstructionsComponent';

// Define the main App function component
function App() {
  // Define state variables for the current step and participant data
  const [step, setStep] = useState(0);
  const [participantData, setParticipantData] = useState({});

  // Define the handleNextClick function for the "Next" button
  const handleNextClick = (value, variableName) => {
    // If a value and a variable name are provided, add the value to the participant data under the provided variable name
    if (value && variableName) {
      setParticipantData(prevData => ({ ...prevData, [variableName]: value }));
    }

    // If the current step is not the last step, increment the current step
    if (step < steps.length - 1) {
      setStep(prevStep => prevStep + 1);
    }
  };

  // Define the steps array
  const steps = [
    {
      component: InputComponent,
      props: {
        question: 'Please input your MTurk code',
        placeholder: 'Enter the code',
        variableName: 'mturkCode'
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions:
        <>
        <p>Thank you for participating in our study! Our goal in this study is to <strong>better understand how you experience emotions in your everyday life</strong>.</p>
        <br />
        <p>First, we would like you to carefully read some background information about emotion. We would then like you to reflect on your experiences of 8 emotions and to use an interactive tool we developed to tell us about your experiences and answer a few questions. Finally, we would like you to use the same interactive tool one more time to tell us about your experiences of 12 emotions. The entire study should take approximately 20 minutes to complete.</p>
        <br />
        <p>We hope you enjoy participating in our study!</p>
      </>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>Please read the following information carefully.</p></>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>On a typical day, most of us experience many different emotions. These emotions can be positive (for example, joy, gratitude, amusement, contentment) or negative (for example, fear, sadness, shame, anger). Our experiences of those emotions can vary in 3 ways...</p></>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>Sometimes, our emotions are CONTROLLABLE. Other times, our emotions can be relatively UNCONTROLLABLE. <strong>An emotion is controllable when one can change its intensity or duration at will (for example, to feel less anxious when one wishes to do so). An emotion is uncontrollable when one cannot change its intensity or duration at will.</strong></p></>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>Sometimes, our emotions are PLEASANT. Other times, our emotions can be relatively UNPLEASANT. <strong>An emotion is pleasant when it feels good to experience it in the moment. An emotion is unpleasant when it feels bad to experience it in the moment.</strong> Some emotions that feel good in the moment may have unpleasant consequences in the future. Similarly, some emotions that do not feel good in the moment may lead to pleasant outcomes in the future. When considering the extent to which an emotion tends to be pleasant or unpleasant, we would like you to consider only how pleasant or unpleasant it feels to experience it in the moment, with no regard for future consequences.</p></>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>Sometimes, our emotions are HELPFUL. Other times, our emotions can be relatively UNHELPFUL. <strong>An emotion is helpful when it suports the ability of the person experiencing it to act in ways that align with their goals and values. An emotion is unhelful when it hinders the ability of the person experiencing it to act in ways that align with their goals and values.</strong> For example, anger can be helpful when it helps a person stand up against injustice or unhelpful when it leads to unprovoked aggression.</p></>
      }
    },
    {
      component: InstructionsComponent,
      props: {
        instructions: <><p>In this study we would like you to think about your typical experiences of different emotions and to use an interactive tool we developed to indicate how controllable, pleasant, and helpful each emotion tends to be when you feel it in your everyday life. Please proceed to the next page to practice using the tool</p></>
      }
    },
  ];
  
  // Inside the return statement of the App function, render the current step component with its props and the handleNextClick function
  return (
    <div className="App">
      {React.createElement(steps[step].component, { ...steps[step].props, onNext: handleNextClick })}
    </div>
  );
}

export default App;