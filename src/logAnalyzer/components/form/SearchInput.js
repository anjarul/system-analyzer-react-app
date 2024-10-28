import React from 'react';

const SearchInput = ({
                         value,
                         onChange,
                         error,
                         placeholder = "Enter search phrase"
                     }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="search" className="text-sm font-medium text-gray-700">
                Search Phrase
            </label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
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

export default SearchInput;