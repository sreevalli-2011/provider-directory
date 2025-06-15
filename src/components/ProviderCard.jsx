// src/components/ProviderCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function ProviderCard({ provider }) {
    return (
        
        <div className="col-12 col-sm-6 col-md-4 mb-4">
            {/* Added shadow for a more prominent box-shadow effect */}
            <Link to={`/provider/${provider.id}`} className="card h-100 text-decoration-none text-dark shadow">
                <img src={provider.imageurl} className="card-img-top rounded-circle mt-3 mx-auto" alt={provider.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{provider.name}</h5>
                    <p className="card-text text-muted mb-1">{provider.specialization}</p>
                    <p className="card-text text-muted">{provider.location}</p>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`bi bi-star${i < Math.floor(provider.rating) ? '-fill text-warning' : ''}`}
                            ></i>
                        ))}
                        <span className="ms-2">{provider.rating} / 5</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProviderCard;