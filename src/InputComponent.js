import React, { useState } from 'react';

function InputComponent({ question, placeholder, variableName, onNext }) {
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

  return (
    <div className="input-component">
      <p>{question}</p>
      <input type="text" placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default InputComponent;
