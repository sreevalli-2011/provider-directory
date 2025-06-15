// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the components that define our different pages/views
import ProviderListing from './components/ProviderListing'; // Displays the list of providers
import ProviderDetail from './components/ProviderDetail';   // This component is for individual provider details

// You can use this for general global styles or remove it if you primarily use
// Bootstrap and component-specific CSS (like ProviderCard.css).
import './App.css'; // Importing global styles for the application
function App() {
  return (
    // Router component wraps the entire application to enable routing functionality.
    <Router>
      <div className="App">

        {/* Header: bg-primary for full-width blue background.
            text-white for white text. text-center for centering text inside.
            py-3, mb-4, shadow-sm are Bootstrap spacing and shadow.
            app-header is our custom class (if needed for other specific styles). */}
        <header className="bg-primary text-white text-center py-3 mb-4 shadow-sm app-header">
          {/* CHANGED: Revert back to 'container' (from 'container-fluid')
              This div handles responsive width and centering its content within the header. */}
          <div className="container">
            <h1>Learning Support Directory</h1>
          </div>
        </header>

        {/* Main content area of the application */}
        {/* container and my-4 are Bootstrap classes for responsive width and vertical margin. */}
        <main className="container my-4">
          {/* Routes component acts as a switch, rendering only the first <Route> that matches the current URL */}
          <Routes>
            {/* Route for the main listing page. */}
            <Route path="/" element={<ProviderListing />} />

            {/* Route for the individual provider detail page. */}
            <Route path="/provider/:id" element={<ProviderDetail />} />

            {/* Optional: A fallback route for any paths that don't match the above (e.g., a 404 Not Found page). */}
            <Route path="*" element={
              <div className="text-center my-5">
                <h2 className="display-4 text-danger">404</h2>
                <p className="lead">Page Not Found</p>
                <p>The page you are looking for does not exist. Please check the URL.</p>
                {/* You could add a link to go back home here: <Link to="/" className="btn btn-primary mt-3">Go to Home</Link> */}
              </div>
            } />
          </Routes>
        </main>

        {/* Application Footer: Uses Bootstrap classes for styling */}
        <footer className="bg-light text-center py-3 mt-5 border-top">
          <div className="container">
            {/* Displays current year dynamically */}
            <p className="text-muted mb-0">&copy; {new Date().getFullYear()} Habot Connect. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;