import React from 'react';

function highlightText(text, phrase) {
    const parts = text.split(new RegExp(`(${phrase})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === phrase.toLowerCase() ? <mark key={index}>{part}</mark> : part
    );
}

function LogTable({ logs, phrase }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Datetime</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            {logs.map((log, index) => (
                <tr key={index}>
                    <td>{log.datetime}</td>
                    <td>{highlightText(log.message, phrase)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default LogTable;
