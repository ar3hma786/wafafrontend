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

export const agentWelcome = () => apiClient.get('/list/userslist');

export const createUser = async (formData) => {
    try {
        const response = await apiClient.post('/auth/signup', formData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create user: ' + error.message);
    }
};