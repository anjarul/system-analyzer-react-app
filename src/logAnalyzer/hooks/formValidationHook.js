import {useState, useCallback, useEffect} from 'react';
import {validateDateRange, validateSearchPhrase} from '../../utils/validationUtils';

export const formValidationHook = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);  // Track validity explicitly

    const validate = useCallback(() => {
        const newErrors = {};

        const dateError = validateDateRange(values.from, values.to);
        if (dateError) {
            newErrors.from = dateError;
            newErrors.to = dateError;
        }

        const phraseError = validateSearchPhrase(values.phrase);
        if (phraseError) {
            newErrors.phrase = phraseError;
        }

        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);

        return Object.keys(newErrors).length === 0;
    }, [values]);

    const handleChange = useCallback((name, value) => {
        setValues(prev => ({...prev, [name]: value}));
        setErrors(prev => ({...prev, [name]: undefined}));
        validate();
    }, [validate]);

    useEffect(() => {
        validate();
    }, [validate]);

    return {
        values,
        errors,
        handleChange,
        validate,
        setValues,
        isValid
    };
};
