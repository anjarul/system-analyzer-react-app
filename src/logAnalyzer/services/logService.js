import { API_CONFIG } from '../../constants/config';
import axios from 'axios';

const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT
});

export const logService = {
    fetchLogs: async (params) => {
        const response = await api.post(API_CONFIG.ENDPOINTS.DATA, params);
        return response.data;
    },

    fetchHistogram: async (params) => {
        const response = await api.post(API_CONFIG.ENDPOINTS.HISTOGRAM, params);
        return response.data;
    },

    getStatus: async () => {
        const response = await api.get(API_CONFIG.ENDPOINTS.STATUS);
        return response.data;
    },

    getSize: async () => {
        const response = await api.get(API_CONFIG.ENDPOINTS.SIZE);
        return response.data;
    }
};