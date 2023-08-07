import React from 'react';

function ComponentInstructions({ instructions, onNext, onPrevious }) {
  // Create a function to handle the next button click
  const handleNextClick = () => {
    onNext();
  };

  // Create a function to handle the previous button click
  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="component-instructions">
      <p>{instructions}</p>
      {onPrevious && <button onClick={handlePreviousClick}>Previous</button>}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default ComponentInstructions;
