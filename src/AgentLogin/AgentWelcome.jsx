// AgentWelcome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgentWelcome.css';
import { agentWelcome } from '../API/RestAPIService';
import CreateUser from './CreateUser';

function AgentWelcome() {
    const [users, setUsers] = useState([]);
    const [createUsers, setCreateUsers] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await agentWelcome();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    console.log('createUsers:', createUsers); // Add console log to check state

    return (
        <div className='container-fluid mt-5'>
            <div className='card shadow px-3 py-3 mx-2 my-2 bg-white rounded'>
                <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                    <div className="createuser mt-2 mt-md-0 me-md-3">
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => {
                                console.log('Button clicked'); // Check if button click event is firing
                                setCreateUsers(true);
                            }}
                        >
                            Create New User
                        </button>
                        {createUsers && createPortal(
                            <CreateUser onClose={() => setCreateUsers(false)} />, // Check if onClose function is being called
                            document.body
                        )}
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 mt-md-0'>
                        <div className='upload me-3'>
                            <button type="button" className="btn btn-outline-warning uploadexcel border-dark">Upload Excel Document</button>
                        </div>
                        <div className='generateReport'>
                            <button type="button" className="btn btn-success text-dark">Generate Report</button>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <form className="d-flex mt-2">
                        <input className="form-control rounded-pill me-2" type="search" placeholder="Search by card number" aria-label="Search" />
                        <button className="btn btn-warning rounded-pill p-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="card shadow px-3 py-3 mx-2 my-2 bg-white rounded">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Card Number</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Phone No</th>
                                    <th>CareOff1</th>
                                    <th>CareOff2</th>
                                    <th>Payment Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.cardNumber}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.name}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.city}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.phoneNo}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.careOff1}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>{user.careOff2}</Link></td>
                                        <td><Link to={`/welcome/${user.cardNumber}`} className='details'>Payment Updated By {user.paymentUpdated}</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentWelcome;
