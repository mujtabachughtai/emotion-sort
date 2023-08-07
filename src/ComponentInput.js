import React, { useState } from 'react';

function ComponentInput({ question, placeholder, variableName, onNext }) {
  // Create a state variable for the input value
  const [inputValue, setInputValue] = useState('');

  // Create a function to handle the input change
  const handleInputChange = (event) => {
    // Update the input value state variable
    setInputValue(event.target.value);
  };

  // Create a function to handle the button click
  const handleClick = () => {
    // Call the onNext function with the current input value and variable name
    onNext(inputValue, variableName);
  };

  // Create a function to handle key press
  const handleKeyPress = (event) => {
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
      // Prevent form submission
      event.preventDefault();
      // Trigger the click event
      handleClick();
    }
  };

  return (
    <div className="component-input">
      <p>{question}</p>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default ComponentInput;
