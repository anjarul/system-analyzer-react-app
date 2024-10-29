import { useState } from 'react';
import { logService } from '../services/logService';

export const logAnalyzerHook = () => {
    const [logs, setLogs] = useState(null);
    const [histogram, setHistogram] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (params) => {
        try {
            setLoading(true);
            setError(null);

            const [logsData, histogramData] = await Promise.all([
                logService.fetchLogs(params),
                logService.fetchHistogram(params)
            ]);

            setLogs(logsData);
            setHistogram(histogramData.histogram);
        } catch (err) {
            setError(err.message || 'Failed to fetch log data');
            setLogs(null);
            setHistogram([]);
        } finally {
            setLoading(false);
        }
    };

    return {
        logs,
        histogram,
        loading,
        error,
        fetchData
    };
};