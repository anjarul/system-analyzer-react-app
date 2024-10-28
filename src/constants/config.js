export const API_CONFIG = {
    BASE_URL: process.env.ROOT_URL || 'http://localhost:8080/api',
    ENDPOINTS: {
        STATUS: '/get_status',
        SIZE: '/get_size',
        DATA: '/data',
        HISTOGRAM: '/histogram'
    },
    TIMEOUT: 30000 // 30 seconds
};