// Import the necessary module from react
import React from 'react';

// Define the SortingTask component
// It receives several props: 
// - 'instructions' which contain the instructions for the task, 
// - 'dimension' which is an array of two strings describing the sorting dimensions,
// - 'words' which is an array of words to be sorted,
// - 'onComplete' which is a callback function to be executed when the user completes the task.
const SortingTask = ({ instructions, dimension, words, onComplete }) => {
  // Return the JSX for the component
  // The outer div has the class "SortingTask" for styling purposes
  return (
    <div className="SortingTask">
      {/* The instructions for the sorting task are displayed in a paragraph tag */}
      <p>{instructions}</p>

      {/* The dimension labels are displayed in their own div, with each label in a separate paragraph tag */}
      <div className="dimension">
        {/* The first dimension label */}
        <p>{dimension[0]}</p>

        {/* The second dimension label */}
        <p>{dimension[1]}</p>
      </div>

      {/* The sorting area is represented by an empty div */}
      <div className="sortingArea" />

      {/* A button triggers the 'onComplete' function when clicked */}
      <button onClick={onComplete}>Next</button>
    </div>
  );
}

// Export the SortingTask component so it can be used in other files
export default SortingTask;
