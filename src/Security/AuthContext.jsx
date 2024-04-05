import React, { createContext, useContext, useState } from 'react';
// import { executeJWTAuthentication } from '../API/RestAPIService';
// import { apiClient } from '../API/APIClient';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    function login(cardNumber, password) {
        if (cardNumber === '1001' && password === 'dummy') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
