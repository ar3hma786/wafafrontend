import React from 'react';
import { Link } from 'react-router-dom';
import './UserLogout.css';

function UserLogout() {
    return (
        <div className="logout-container">
            <div className="logout" key="user-logout">
                <h1 className="text-center logouts">You are Logged Out. Thank you for using Wafa</h1>
                <h3 className='text-center logouts'>Go Back To Home</h3>
                <div className="d-flex justify-content-center">
                    <Link to="/login" className="btn btn-dark buttons me-2 text-center">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserLogout;
