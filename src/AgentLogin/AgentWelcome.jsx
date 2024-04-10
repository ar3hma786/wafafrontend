import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './AgentWelcome.css';

function AgentWelcome() {

    const [values, setValues] = useState([
        {
            cardNumber: '9590',
            name: 'Bilal Hussain',
            city: 'Mangalore',
            phoneNo: '8618609838',
            careOff1: 'NA',
            careOff2: 'AZ',
            paymentUpdated: 'AZ'
        },
        {
            cardNumber: '4567',
            name: 'Cristiano Ronaldo',
            city: 'Portugal',
            phoneNo: '8073340916',
            careOff1: 'NA',
            careOff2: 'NA',
            paymentUpdated: 'AZ',
        }
    ]);

    return (
        <div className='container-fluid mt-5'>
            <div className='card shadow px-3 py-3 mx-2 my-2 bg-white rounded'>
                <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                    <div className='createuser mt-2 mt-md-0 me-md-3'>
                        <button type="button" className="btn btn-warning">Create New User</button>
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

                                {values.map((value, index) => (
                                    <tr key={index}>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.cardNumber}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.name}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.city}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.phoneNo}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.careOff1}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>{value.careOff2}</Link></td>
                                        <td><Link to={`/details/${value.cardNumber}`} className='details'>Payment Updated By {value.paymentUpdated}</Link></td>
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
