import React from 'react';

const LogTable = ({ logs }) => {
    const HighlightedMessage = ({ message, highlights }) => {
        if (!highlights || highlights.length === 0) {
            return <span>{message}</span>;
        }

        let lastIndex = 0;
        const parts = [];

        highlights.forEach((highlight, index) => {
            if (lastIndex < highlight.fromPosition) {
                parts.push(
                    <span key={`text-${index}`}>
            {message.substring(lastIndex, highlight.fromPosition)}
          </span>
                );
            }

            parts.push(
                <mark key={`highlight-${index}`} className="bg-yellow-200">
                    {message.substring(highlight.fromPosition, highlight.toPosition)}
                </mark>
            );

            lastIndex = highlight.toPosition;
        });

        if (lastIndex < message.length) {
            parts.push(
                <span key="text-end">
          {message.substring(lastIndex)}
        </span>
            );
        }

        return <>{parts}</>;
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Datetime
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {logs.data?.map((log, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {log.datetime}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                            <HighlightedMessage
                                message={log.message}
                                highlights={log.highlightText}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LogTable;