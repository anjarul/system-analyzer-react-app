import React, { useState } from 'react';

function InputForm({ onSubmit }) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [phrase, setPhrase] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ from, to, phrase });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="datetime-local" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" />
            <input type="datetime-local" value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" />
            <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} placeholder="Search Phrase" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputForm;
