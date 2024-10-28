import { useState, useCallback } from 'react';
import { validateDateRange, validateSearchPhrase } from '../../utils/validationUtils';

export const useFormValidation = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = useCallback(() => {
        const newErrors = {};

        // Validate dates
        const dateError = validateDateRange(values.from, values.to);
        if (dateError) {
            newErrors.date = dateError;
        }

        // Validate search phrase
        const phraseError = validateSearchPhrase(values.phrase);
        if (phraseError) {
            newErrors.phrase = phraseError;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [values]);

    const handleChange = useCallback((name, value) => {
        setValues(prev => ({ ...prev, [name]: value }));
        // setErrors(prev => ({ ...prev, [name]: undefined }));
    }, []);

    return {
        values,
        errors,
        handleChange,
        validate,
        setValues,
        isValid: Object.keys(errors).length === 0
    };
};
