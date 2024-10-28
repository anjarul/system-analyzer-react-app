import axios from 'axios';

const BASE_URL = "http://localhost:8080/api";

export const LogService = {
    async fetchLogs(params) {
        const response = await axios.post(`${BASE_URL}/data`, params);
        return response.data;
    },

    async fetchHistogram(params) {
        const response = await axios.post(`${BASE_URL}/histogram`, params);
        return response.data;
    }
};