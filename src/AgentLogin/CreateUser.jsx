import React, { useState } from 'react';

function CreateUser() {
    const [values, setValues] = useState({
        cardNumber: '',
        name: '',
        password: '',
        phoneNo: '',
        city: '',
        careOff1: '',
        careOff2: '',
        paymentUpdated: '',
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card">
                <div className="text-dark">
                    <h6 className="userlogin text-center mt-2">Create New User</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="Enter the card number" required value={values.cardNumber} name="cardNumber" onChange={handleChange('cardNumber')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter the name" required value={values.name} name="name" onChange={handleChange('name')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter the password" required value={values.password} name="password" onChange={handleChange('password')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNo" className="form-label">Phone No</label>
                            <input type="text" className="form-control" id="phoneNo" placeholder="Enter the phone number" required value={values.phoneNo} name="phoneNo" onChange={handleChange('phoneNo')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter the city" required value={values.city} name="city" onChange={handleChange('city')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="careOff1" className="form-label">CAREOFF1</label>
                            <select className="form-control" id="careOff1" name="careOff1" value={values.careOff1} onChange={handleChange('careOff1')}>
                                <option value="">Select</option>
                                <option value="AZ">AZ</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="careOff2" className="form-label">CAREOFF2</label>
                            <select className="form-control" id="careOff2" name="careOff2" value={values.careOff2} onChange={handleChange('careOff2')}>
                                <option value="">Select</option>
                                <option value="AZ">AZ</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="paymentUpdated" className="form-label">PAYMENT UPDATED</label>
                            <select className="form-control" id="paymentUpdated" name="paymentUpdated" value={values.paymentUpdated} onChange={handleChange('paymentUpdated')}>
                                <option value="">Select</option>
                                <option value="AZ">AZ</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-dark">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;