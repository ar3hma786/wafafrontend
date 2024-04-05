import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserLogin from '../UserLogin/UserLogin';
import UserWelcome from '../UserLogin/UserWelcome';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PaymentCompleted from '../UserLogin/PaymentCompleted';
import PaymentNotCompleted from '../UserLogin/PaymentNotCompleted';
import UserLogout from '../UserLogin/UserLogout';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import AuthProvider, { useAuth } from '../Security/AuthContext';

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) {
        return children
    }

    return <Navigate to='/' />
}

function MainComponent() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<UserLogin />} />
                        <Route path='/login' element={<UserLogin />} />
                        <Route path='/welcome/:cardNumber' element={
                            <AuthenticatedRoute>
                                <UserWelcome />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/:cardNumber/payment-completed' element={
                            <AuthenticatedRoute>
                                <PaymentCompleted />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/:cardNumber/payment-not-completed' element={
                            <AuthenticatedRoute>
                                <PaymentNotCompleted />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <UserLogout />
                            </AuthenticatedRoute>
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default MainComponent;
