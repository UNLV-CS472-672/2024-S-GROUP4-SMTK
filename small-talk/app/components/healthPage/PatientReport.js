import React, { useState } from 'react';
import PatientReportSlider from './PatientReportSlider';
import PatientReportOptions from './PatientReportOptions';
import PatientReportOpen from './PatientReportOpen';
import reportItems from '../../data/healthData/PatientReportQuestions.json';

function PatientReport() {
    const [responses, setResponses] = useState(
        reportItems.reduce((acc, item) => {
            acc[item.id] = item.type === 'open' ? '' : (item.type === 'options' ? '' : 0);
            return acc;
        }, {})
    );

    const handleReset = () => {
        setResponses(
            reportItems.reduce((acc, item) => {
                acc[item.id] = item.type === 'open' ? '' : (item.type === 'options' ? '' : 0);
                return acc;
            }, {})
        );
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-5 mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Daily Health Report</h2>
            {reportItems.map(item => {
                const Component = item.type === 'slider' ? PatientReportSlider :
                                  item.type === 'options' ? PatientReportOptions : PatientReportOpen;
                return <Component key={item.id} details={item} value={responses[item.id]} setValue={(value) => setResponses({...responses, [item.id]: value})} />;
            })}
            <div className="mt-4 text-center">  {/* Centered button with some margin-top for spacing */}
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleReset}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default PatientReport;
