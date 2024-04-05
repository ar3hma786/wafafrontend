import React, { useEffect, useState } from 'react';
import './UserWelcome.css';
import { Link, useParams } from 'react-router-dom';
import { userwelcome } from '../API/RestAPIService';

function UserWelcome() {
    const [values, setValues] = useState({
        cardNumber: '',
        name: '',
        password: '',
        phoneNo: '',
        city: '',
        months: []
    });

    const { cardNumber } = useParams();

    useEffect(() => {
        fetchUser();
    }, [cardNumber]);

    async function fetchUser() {
        try {
            const response = await userwelcome(cardNumber);
            setValues(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    const Payment = ({ index }) => {
        const paymentColor = values.months[index] === "Paid" ? "green" : "yellow";

        return (
            <div className={`payment-block ${paymentColor} text-center`} id={`payment-block-${index + 1}`}>
                <Link to={values.months[index] === "Paid" ? `/${cardNumber}/payment-completed` : `/${cardNumber}/payment-not-completed`} className='black-link'>
                    <div className={`payment ${paymentColor}`} style={{ backgroundColor: paymentColor }}>
                        <h6>Payment {values.months[index] === "Paid" ? "Completed" : "Not Completed"}</h6>
                    </div>
                </Link>
            </div>
        );
    };

    return (
        <>
            <h1 className="text-center mb-4 cardnumber mt-3">{values.cardNumber}</h1>

            <div className="user-container d-flex justify-content-center align-items-center">
                <div className="row container user border rounded p-3 mix">
                    <div className="col-md-6">
                        <label className='users'>Name : <span>{values.name}</span></label>
                    </div>
                    <div className="col-md-6">
                        <label className='users'>City : <span>{values.city}</span></label>
                    </div>
                    <div className="col-md-6">
                        <label className='users'>Phone Number : <span>{` `}{values.phoneNo}</span></label>
                    </div>
                </div>
            </div>
            <div className="chart-container d-flex justify-content-center align-items-center">
                <div className="row container chart border rounded p-3 mix">
                    <h2 className='text-center mb-4'>Payment Chart</h2>
                    {Array.from({ length: 20 }, (_, i) => (
                        <div className={`col-md-3 border rounded solid black p-2 charbox ${values.months[i] === "Paid" ? "green" : "yellow"}`} key={i + 1} style={{ backgroundColor: values.months[i] === "Paid" ? "green" : "yellow" }}>
                            <Link to={values.months[i] === "Paid" ? `/${cardNumber}/payment-completed` : `/${cardNumber}/payment-not-completed`} className='charter'>
                                <h2 className="text-center">{i + 1} - {months[i]}</h2>
                            </Link>
                            <Payment index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default UserWelcome;
