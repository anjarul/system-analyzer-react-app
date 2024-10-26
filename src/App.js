import React, {useState} from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import LogTable from './components/LogTable';
import Histogram from './components/Histogram';

function App() {
    const [logs, setLogs] = useState([]);
    const [histogram, setHistogram] = useState([]);
    const url = "http://localhost:8080/api";

    const handleSearch = async ({from, to, phrase}) => {
        try {
            const response = await axios.post(`${url}/data`, {
                datetimeFrom: from,
                datetimeUntil: to,
                phrase: phrase
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => console.log(response.data))
                .catch(error => console.error('Error:', error));

            setLogs(response.data.data);

            const histogramResponse = await axios.post(`${url}/histogram`, {
                datetimeFrom: from,
                datetimeUntil: to,
                phrase: phrase
            });
            setHistogram(histogramResponse.data.histogram);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <h1>System Log Analyzer</h1>
            <InputForm onSubmit={handleSearch}/>
            <LogTable logs={logs} phrase={logs.phrase}/>
            <Histogram data={histogram}/>
        </div>
    );
}

export default App;
