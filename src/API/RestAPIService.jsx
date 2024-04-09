import { apiClient } from "./APIClient";

export const userwelcome = (cardNumber) => apiClient.get(`/api/welcome/${cardNumber}`);

export const executeJWTAuthentication = (cardNumber, password) => {
    try {
        const response = apiClient.post(`/auth/signin`, { cardNumber, password });
        return response;
    } catch (error) {
        return error.response;
    }
};