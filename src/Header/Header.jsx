import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import './Header.css';
import { useAuth } from '../Security/AuthContext';

function Header() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navcolor px-3">
            <div className="container-fluid">
                <Link className='navbar-brand logo' to="/">
                    <img src='/src/images/wafaImages.png' alt="Logo" className="logoimage" />
                    WAFA
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className='nav-item me-2 user'>
                            {!isAuthenticated && <Link to='/login' className="btn btn-dark user-btn">User Login</Link>}

                        </li>
                        <li className='nav-item admin me-2'>
                            {!isAuthenticated && <Link to='/admin' className="btn btn-outline-dark admin-btn">Admin Login</Link>}
                        </li>
                        <li className='nav-item logout'>
                            {isAuthenticated && <Link to='/logout' onClick={logout} className="btn btn-outline-dark admin-btn">Logout</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
