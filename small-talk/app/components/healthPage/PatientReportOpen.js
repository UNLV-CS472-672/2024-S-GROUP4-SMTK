import React from 'react';

function PatientReportOpen({ details, value, setValue }) {
    const handleTextChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="my-4 p-4 bg-gray-200 rounded-lg shadow">
            <label htmlFor={`open-${details.id}`} className="block text-lg font-medium text-gray-700">
                {details.question}
            </label>
            <textarea
                id={`open-${details.id}`}
                name={details.name}
                value={value}
                onChange={handleTextChange}
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={details.placeholder}
            ></textarea>
        </div>
    );
}

export default PatientReportOpen;
