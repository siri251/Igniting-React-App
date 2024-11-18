import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses 'react-dom/client'

// Using React.createElement to create a simple element
const element = React.createElement(
  'h1',                 // Type of element (e.g., h1, div, p, etc.)
  { style: { color: 'blue' } },  // Props (optional)
  'Hello, World!'       // Children (the content inside the element)
);

// Get the root element (in your HTML)
const root = document.getElementById('root');

// Create a root for React and render the element
const rootElement = ReactDOM.createRoot(root);
rootElement.render(element); 