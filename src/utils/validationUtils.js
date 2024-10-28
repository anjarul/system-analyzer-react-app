export const validateDateRange = (fromDate, toDate) => {
    if (!fromDate) return 'Start date is required';
    if (!toDate) return 'End date is required';

    const start = new Date(fromDate);
    const end = new Date(toDate);

    if (isNaN(start.getTime())) return 'Invalid start date';
    if (isNaN(end.getTime())) return 'Invalid end date';
    if (start > end) return 'End date must be after start date';

    return null;
};

export const validateSearchPhrase = (phrase) => {
    if (!phrase?.trim()) return 'Search phrase is required';
    if (phrase.length < 1) return 'Search phrase must be at least 2 characters';
    return null;
};