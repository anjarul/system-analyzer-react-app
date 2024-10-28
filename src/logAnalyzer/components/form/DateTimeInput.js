import React from 'react';

const DateTimeInput = ({
                           id,
                           label,
                           value,
                           onChange,
                           error,
                           min,
                           max
                       }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                type="datetime-local"
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                className={`p-2 border rounded focus:ring-blue-500 focus:border-blue-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && (
                <span className="text-red-500 text-sm">{error}</span>
            )}
        </div>
    );
};

export default DateTimeInput;