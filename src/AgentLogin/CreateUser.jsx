import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateUser.css';

function CreateUser({ onClose }) {
    const [formData, setFormData] = useState({
        cardNumber: '1245',
        name: 'Bilal Hussain',
        phone: '7865434567',
        city: 'Mangalore',
        password: '12345',
        careOff1: 'AZ',
        careOff2: 'NA',
        paymentUpdated: 'NA',
        months: [
            { month: 'Nov', paymentStatus: 'Paid' },
            { month: 'Dec', paymentStatus: 'Not Paid' },
            { month: 'Jan', paymentStatus: 'Paid' },
            { month: 'Feb', paymentStatus: 'Paid' },
            { month: 'Mar', paymentStatus: 'Paid' },
            { month: 'Apr', paymentStatus: 'Not Paid' },
            { month: 'May', paymentStatus: 'Not Paid' },
            { month: 'Jun', paymentStatus: 'Not Paid' },
            { month: 'Jul', paymentStatus: 'Not Paid' },
            { month: 'Aug', paymentStatus: 'Not Paid' },
            { month: 'Sep', paymentStatus: 'Paid' },
            { month: 'Oct', paymentStatus: 'Paid' },
            { month: 'Nov', paymentStatus: 'Not Paid' },
            { month: 'Dec', paymentStatus: 'Paid' },
            { month: 'Jan', paymentStatus: 'Not Paid' },
            { month: 'Feb', paymentStatus: 'Paid' },
            { month: 'Mar', paymentStatus: 'Paid' },
            { month: 'Apr', paymentStatus: 'Not Paid' },
            { month: 'May', paymentStatus: 'Not Paid' },
            { month: 'Jun', paymentStatus: 'Paid' },
        ]
    });

    const handleChange = (e, name) => {
        const { value } = e.target;
        if (name === 'careOff1' || name === 'careOff2' || name === 'paymentUpdated') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        } else if (name.startsWith('month')) {
            const monthIndex = parseInt(name.slice(5));
            setFormData(prevData => {
                const updatedMonths = prevData.months.map((month, index) => {
                    if (index === monthIndex) {
                        return {
                            ...month,
                            paymentStatus: value,
                        };
                    }
                    return month;
                });
                return {
                    ...prevData,
                    months: updatedMonths,
                };
            });
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert the months array to a list of strings
            const months = formData.months.map(month => month.month + ":" + month.paymentStatus);

            // Sending form data to the backend using Axios
            const response = await axios.post('http://localhost:8080/auth/signup', { ...formData, months });

            // Assuming createUser returns the token upon successful user creation
            console.log('Token:', response.data.token);
            onClose(); // Close the modal upon successful user creation
        } catch (error) {
            console.error('Error:', error.message);

        }
    };


    return (
        <div className='modal d-flex justify-content-center align-items-center' style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Create New User</h3>
                        <button type='button' className='btn-close' onClick={onClose}></button>
                    </div>

                    <div className='modal-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <input type='text' className='form-control' placeholder='Card Number' name='cardNumber' value={formData.cardNumber} onChange={(e) => handleChange(e, 'cardNumber')} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type='text' className='form-control' placeholder='Name' name='name' value={formData.name} onChange={(e) => handleChange(e, 'name')} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type='text' className='form-control' placeholder='Phone Number' name='phone' value={formData.phone} onChange={(e) => handleChange(e, 'phone')} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type='text' className='form-control' placeholder='City' name='city' value={formData.city} onChange={(e) => handleChange(e, 'city')} required />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <input type='password' className='form-control' placeholder='Password' name='password' value={formData.password} onChange={(e) => handleChange(e, 'password')} required />
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select' value={formData.careOff1} onChange={(e) => handleChange(e, 'careOff1')}>
                                            <option value=''>Select Care Off 1</option>
                                            <option value='AZ'>AZ</option>
                                            <option value='NA'>NA</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select' value={formData.careOff2} onChange={(e) => handleChange(e, 'careOff2')}>
                                            <option value=''>Select Care Off 2</option>
                                            <option value='AZ'>AZ</option>
                                            <option value='NA'>NA</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select' value={formData.paymentUpdated} onChange={(e) => handleChange(e, 'paymentUpdated')}>
                                            <option value=''>Payment Updated By</option>
                                            <option value='AZ'>AZ</option>
                                            <option value='NA'>NA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='row'>
                                    {formData.months.map((month, index) => (
                                        <div key={index} className='col-sm-4 col-md-2 mb-3'>
                                            <select className='form-select' value={month.paymentStatus} onChange={(e) => handleChange(e, `month${index}`)} required>
                                                <option value=''> {month.month}</option>
                                                <option value='Paid'>Paid</option>
                                                <option value='Not Paid'>Not Paid</option>
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='d-grid gap-2'>
                                <button type='submit' className='btn btn-warning'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;