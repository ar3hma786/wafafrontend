import React, { useState } from 'react';
import './UserLogin.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Security/AuthContext';

function UserLogin() {
    const [cardNumber, setCardNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const authContext = useAuth();

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'cardNumber') {
            setCardNumber(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    async function handleSubmit() {
        if (await authContext.login(cardNumber, password)) {
            navigate(`/welcome/${cardNumber}`);
        } else {
            setErrorMessage(true);
        }
    }

    function ErrorMessage() {
        return errorMessage && <div className='errorMessage text-danger text-center'>Invalid Credentials. Please try again</div>;
    }

    return (
        <div className="container-fluid mb-4 wafacontainer">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <img src="/src/images/images.png" alt="wafa" className="img-fluid" />
                </div>
                <div className="col-lg-5 col-md-8 col-sm-10">
                    <div className="card user-login-card">
                        <div className="text-dark">
                            <h4 className="userlogin text-center mt-3">Login</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <ErrorMessage />
                                <div className="mb-3">
                                    <label htmlFor="cardnumber" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="cardnumber" placeholder="Enter the card number" required value={cardNumber} name="cardNumber" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter the password" required value={password} name="password" onChange={handleChange} />
                                    <div className='forget'>
                                        <a href=''>Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-dark" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
