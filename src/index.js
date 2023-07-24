// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import App component
import App from './App';

// Import reportWebVitals utility for measuring performance
import reportWebVitals from './reportWebVitals';

// Find the root HTML element in your document where the React application will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component inside this root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals function. It's currently not logging or reporting anything.
// If you want to measure performance, you can pass a function to it (like console.log) 
// or send data to an analytics endpoint.
reportWebVitals();
