import React from 'react';

function ComponentSorting({ instructions, dimension, words }) {

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Shuffle the words array
  const shuffledWords = shuffleArray([...words]);

  return (
    <div className="component-sorting">
      <div className="instructions">{instructions}</div>
      <div className="dimension-container">
        <div className="dimension-value dimension-value-left">
          {dimension[0]}
        </div>
        <div className="dimension-arrow"></div>
        <div className="dimension-value dimension-value-right">
          {dimension[1]}
        </div>
      </div>
      <div className="sorting-area"></div>
      <div className="word-boxes-container">
        {shuffledWords.map((word, index) => (
          <div key={index} className="draggable-word-box">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentSorting;
