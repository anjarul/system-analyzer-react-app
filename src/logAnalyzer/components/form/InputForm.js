import React, {useEffect} from 'react';
import DateTimeInput from './DateTimeInput';
import SearchInput from './SearchInput';
import {formValidationHook} from '../../hooks/formValidationHook';
import {getFirstDayOfMonth, getCurrentDateTime, formatDateTime} from '../../../utils/dateUtils';

const InputForm = ({onSubmit}) => {
    const {
        values,
        errors,
        handleChange,
        validate,
        setValues,
        isValid
    } = formValidationHook({
        from: '',
        to: '',
        phrase: ''
    });

    useEffect(() => {
        setValues({
            from: formatDateTime(getFirstDayOfMonth()),
            to: formatDateTime(getCurrentDateTime()),
            phrase: ''
        });
    }, [setValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({
                datetimeFrom: values.from,
                datetimeUntil: values.to,
                phrase: values.phrase
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="flex flex-wrap gap-6 items-end">
                <DateTimeInput
                    id="from"
                    label="From Date"
                    value={values.from}
                    onChange={(e) => handleChange('from', e.target.value)}
                    error={errors.from}
                />

                <DateTimeInput
                    id="to"
                    label="To Date"
                    value={values.to}
                    onChange={(e) => handleChange('to', e.target.value)}
                    error={errors.to}
                />

                <SearchInput
                    value={values.phrase}
                    onChange={(e) => handleChange('phrase', e.target.value)}
                    error={errors.phrase}
                />

                <button
                    type="submit"
                    disabled={!isValid}
                    className={`p-3 rounded-md text-white font-medium ${isValid ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'}`}>
                    Search Logs
                </button>

            </div>


        </form>
    );
};

export default InputForm;
