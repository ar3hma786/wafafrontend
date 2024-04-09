import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Security/AuthContext';

function AgentLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const authContext = useAuth();

    async function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const success = await authContext.adminlogin(username, password);
            if (success) {
                navigate(`/adminwelcome/${username}`); // Corrected navigation path
            } else {
                setErrorMessage('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    }



    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card user-login-card">
                <div className="text-dark">
                    <h4 className="userlogin text-center mt-2">Admin Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <div className='errorMessage text-danger text-center'>{errorMessage}</div>}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter the admin username" required value={username} name="username" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter the password" required value={password} name="password" onChange={handleChange} />
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-dark">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AgentLogin;
