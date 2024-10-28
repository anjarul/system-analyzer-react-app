export const formatDateTime = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().slice(0, 16);
};

export const getFirstDayOfMonth = () => {
    const date = new Date();
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
};

export const getCurrentDateTime = () => {
    return new Date();
};

export const isValidDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) return false;
    return new Date(startDate) <= new Date(endDate);
};
