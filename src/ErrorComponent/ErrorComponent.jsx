import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorComponent.css';

function ErrorComponent() {
    return (
        <div className='error-container'>
            <div className='error'>
                <h1 className="text-center pb-3 not">Page Not Found</h1>
                <h3 className='text-center not'>The requested URL was not found on our server. Please go back to the login page.</h3>
                <div className="d-flex justify-content-center pb-3">
                    <Link to="/login" className="btn btn-dark buttons me-2 text-center">
                        User Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;
