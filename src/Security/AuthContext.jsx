import React, { createContext, useContext, useState } from 'react';
import { executeJWTAuthentication } from '../API/RestAPIService';
import { apiClient } from '../API/APIClient';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [token, setToken] = useState('');
    const [firstLogin, setFirstLogin] = useState(true); // Track first login

    async function login(cardNumber, password) {
        try {
            const response = await executeJWTAuthentication(cardNumber, password);
            if (response.status === 200) {
                const jwtToken = 'Bearer ' + response.data.token;
                setAuthenticated(true);
                setCardNumber(cardNumber);
                setToken(jwtToken);

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken;
                        return config;
                    },
                    (error) => {
                        return Promise.reject(error);
                    }
                );

                if (firstLogin) { // Redirect to userwelcome page on first successful login
                    setFirstLogin(false);
                    return true;
                }
            } else {
                console.error('Login failed:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
        setCardNumber('');
        setToken('');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, cardNumber, token }}>
            {children}
        </AuthContext.Provider>
    );
}
