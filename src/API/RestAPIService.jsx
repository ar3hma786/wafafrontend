import { apiClient } from "./APIClient";

export const userwelcome = (cardNumber) => apiClient.get(`/api/welcome/${cardNumber}`);
