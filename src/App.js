import React from 'react';
import LogAnalyzer from "./logAnalyzer/components/views/LogAnalyzer";

function App() {
    return (
        // <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">System Log Analyzer</h1>
                <LogAnalyzer/>
            </div>
        </div>
        // </ErrorBoundary>
    );
}

export default App;