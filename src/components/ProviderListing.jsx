// src/components/ProviderListing.jsx

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import providersData from '../data/providers'; //
import ProviderCard from './ProviderCard';
import './ProviderListing.css'; // Your CSS for this component

function ProviderListing() {
  // Using useState to manage the list of providers (useful if you're fetching data asynchronously)
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NEW: State for search term
  const [searchTerm, setSearchTerm] = useState('');


  // useEffect to fetch data (if you removed it, re-add it like this)
  useEffect(() => {
    // Simulate fetching data (replace with actual fetch if using an API later)
    const getProviders = async () => {
      try {
      
        setProviders(providersData); // Set the initial full list of providers
      } catch (err) {
        setError('Failed to load learning support providers. Please try again.');
        console.error('Error fetching providers:', err);
      } finally {
        setLoading(false);
      }
    };
    getProviders();
  }, []); // Empty dependency array means this runs once on mount

  // NEW: Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // NEW: Filtered list of providers based on search term
  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center my-5 lead">Loading learning support providers...</p>;
  }

  if (error) {
    return <p className="text-center my-5 text-danger display-5">{error}</p>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Learning Support Providers</h2>

      {/* NEW: Search Input Field */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search by name, specialization, or location..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Display message if no providers are found */}
      {filteredProviders.length === 0 ? (
        <p className="text-center lead">No providers found matching your criteria.</p>
      ) : (
       
        <div className="row g-4 justify-content-center">
          {/* Map through the FILTERED providers array */}
          {filteredProviders.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProviderListing;