import React from 'react';
import {logAnalyzerHook} from "../../hooks/logAnalyzerHook";
import LoadingSpinner from "../../../common/LoadingSpinner";
import LogTable from "./LogTable";
import Histogram from "./Histogram";
import InputForm from "../form/InputForm";


const LogAnalyzer = () => {
    const {logs, histogram, loading, error, fetchData} = logAnalyzerHook();

    return (
        <div className="space-y-8">
            <div className="bg-white shadow rounded-lg">
                <InputForm onSubmit={fetchData}/>
            </div>

            {loading && <LoadingSpinner/>}

            {error && (
                <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {logs?.data?.length > 0 && (
                <>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <LogTable logs={logs}/>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                        <Histogram data={histogram}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default LogAnalyzer;