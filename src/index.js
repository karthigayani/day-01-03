import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Default import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Notes by karthi:
// App component call 
// <App /> component call syntax
// (You can call "n" no.of times -> Reusability)
// But Maintain Single main component and create "n" no.of sub components

// React.StrictMode
// Used for Error finding purpose.
// It shows error in the form of warning messages.
// Displays error in console

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals