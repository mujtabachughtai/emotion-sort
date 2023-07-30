import React from 'react';

function InstructionsComponent({ instructions, onNext }) {
  // Create a function to handle the button click
  const handleClick = () => {
    // Check if onNext is a function before calling it
    if (typeof onNext === 'function') {
      onNext();
    } else {
      console.error('onNext is not a function. Check the props passed to this component.');
    }
  };

  return (
    <div className="instructions-component">
      {instructions}
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default InstructionsComponent;
