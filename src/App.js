// Import the React and useState hook from the React package
import React, { useState } from 'react';
// Import the CSS file for styling this component
import './App.css';

// Define the maximum step count, consider this as a constant that represents the total number of steps in your application
const MAX_STEP = 7;

// Define the main App function component
function App() {
  // Define state variables for the current step and input value
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Function to handle clicks on the "Next" button
  const handleNextClick = () => {
    // Check if the input is not empty or if the current step is not the initial step
    if (inputValue !== '' || step !== 0) {
      // Increment the current step
      setStep(prevStep => prevStep + 1);
    }
  };

  // Function to handle clicks on the "Previous" button
  const handlePreviousClick = () => {
    // Decrement the current step if it's more than the second step
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    // Update the input value with the new value
    setInputValue(event.target.value);
  };

  // Define a variable for the text to display, depending on the current step
  let text;
  switch (step) {
    case 0:
      text = <>Please input your MTurk code</>;
      break;
    case 1:
      text = <>Thank you for participating in our study! Our goal in this study is to <strong>better understand how you experience emotions in your everyday life</strong>. First, we would like you to carefully read some background information about emotion. We would then like you to reflect on your experiences of 8 emotions and to use an interactive tool we developed to tell us about your experiences and answer a few questions. Finally, we would like you to use the same interactive tool one more time to tell us about your experiences of 12 emotions. The entire study should take approximately 20 minutes to complete. We hope you enjoy participating in our study!</>;
      break;
    case 2:
      text = <>Please read the following information carefully.</>;
      break;
    case 3:
      text = <>On a typical day, most of us experience many different emotions. These emotions can be positive (for example, joy, gratitude, amusement, contentment) or negative (for example, fear, sadness, shame, anger). Our experiences of those emotions can vary in 3 ways...</>;
      break;
    case 4:
      text = <>Sometimes, our emotions are CONTROLLABLE. Other times, our emotions can be relatively UNCONTROLLABLE. <strong>An emotion is controllable when one can change its intensity or duration at will (for example, to feel less anxious when one wishes to do so). An emotion is uncontrollable when one cannot change its intensity or duration at will.</strong></>;
      break;
    case 5:
      text = <>Sometimes, our emotions are PLEASANT. Other times, our emotions can be relatively UNPLEASANT. <strong>An emotion is pleasant when it feels good to experience it in the moment. An emotion is unpleasant when it feels bad to experience it in the moment.</strong> Some emotions that feel good in the moment may have unpleasant consequences in the future. Similarly, some emotions that do not feel good in the moment may lead to pleasant outcomes in the future. When considering the extent to which an emotion tends to be pleasant or unpleasant, we would like you to consider only how pleasant or unpleasant it feels to experience it in the moment, with no regard for future consequences.</>;
      break;
    case 6:
      text = <>Sometimes, our emotions are HELPFUL. Other times, our emotions can be relatively UNHELPFUL. <strong>An emotion is helpful when it suports the ability of the person experiencing it to act in ways that align with their goals and values. An emotion is unhelful when it hinders the ability of the person experiencing it to act in ways that align with their goals and values.</strong> For example, anger can be helpful when it helps a person stand up against injustice or unhelpful when it leads to unprovoked aggression.</>;
      break;
    case 7:
      text = <>In this study we would like you to think about your typical experiences of different emotions and to use an interactive tool we developed to indicate how controllable, pleasant, and helpful each emotion tends to be when you feel it in your everyday life. Please proceed to the next page to practice using the tool</>;
      break;
    default:
      text = <>Invalid step number</>;
      break;
  }

 // Return the JSX to render for this component
 return (
  <div className="App">
    <div className="content">
      <p>{text}</p>
      {step === 0 && (
        // Show the input field and (if the input is not empty) the "Next" button on the initial step
        <div className="input-section">
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter the code" />
          {inputValue !== '' && <button onClick={handleNextClick}>Next</button>}
        </div>
      )}
      {step !== 0 && step !== 1 && (
        <div className="button-section">
          <button onClick={handlePreviousClick}>Previous</button>
          <button onClick={handleNextClick} disabled={step === MAX_STEP}>Next</button>
        </div>
      )}
      {step === 1 && <button onClick={handleNextClick}>Next</button>}
    </div>
  </div>
);
}

// Export the App component as the default export
export default App;