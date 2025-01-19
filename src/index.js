import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' for older React versions
import './index.css'; // Optional styles
import App from './App'; // Root component of the app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
