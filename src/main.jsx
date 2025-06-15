// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap's JavaScript bundle (includes Popper.js for interactive components)
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import Bootstrap Icons (only once)
import 'bootstrap-icons/font/bootstrap-icons.css';

// General global styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);