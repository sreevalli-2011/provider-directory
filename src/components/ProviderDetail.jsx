// src/components/ProviderDetail.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import providers from '../data/providers';

function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const provider = providers.find(p => p.id === parseInt(id));

  if (!provider) {
    return (
      <div className="container text-center my-5"> {/* Added container and text-center */}
        <h2 className="display-4 text-danger">Provider Not Found</h2>
        <p className="lead">The learning support provider you are looking for does not exist.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Back to Listings
        </button>
      </div>
    );
  }

  return (
    
    <div className="container my-4 py-4">
     
      <div className="row justify-content-center">
       
        <div className="col-12 col-md-10 col-lg-8 text-center"> 
          {/* Image */}
          <img
            src={provider.imageurl}
            alt={provider.name}
            className="img-fluid rounded-circle mb-4 shadow" 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />

          {/* Provider Name and details */}
          <h1 className="display-4 mb-2">{provider.name}</h1> 
          <p className="lead text-muted mb-2">{provider.specialization}</p> 
          <p className="text-muted mb-4">{provider.location}</p>

          {/* Rating Stars */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi bi-star${i < Math.floor(provider.rating) ? '-fill text-warning' : ''} fs-4 me-1`} 
              ></i>
            ))}
            <span className="ms-2 fs-5">{provider.rating} / 5</span>
          </div>

          {/* Long Description */}
          <p className="mb-4 text-start">{provider.longDescription}</p> 

          {/* Contact Information */}
          <div className="mb-5">
            <h4 className="mb-3">Contact Information</h4>
            <p className="lead">Email: <a href={`mailto:${provider.contactEmail}`}>{provider.contactEmail}</a></p>
            <p className="lead">Phone: <a href={`tel:${provider.contactPhone}`}>{provider.contactPhone}</a></p>
          </div>

          {/* Back Button */}
          <button className="btn btn-secondary btn-lg" onClick={() => navigate('/')}> 
            Back to All Providers
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail;