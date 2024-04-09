import { apiClient } from "./APIClient";

export const userwelcome = (cardNumber) => apiClient.get(`/api/welcome/${cardNumber}`);

export const executeJWTAuthentication = async (cardNumber, password) => {
    try {
        const response = await apiClient.post(`/auth/signin`, { cardNumber, password });
        return response;
    } catch (error) {
        return error.response; // Return error response if request fails
    }
};