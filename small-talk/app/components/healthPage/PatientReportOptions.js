import React from 'react';

function PatientReportOptions({ details, value, setValue }) {
    const handleOptionChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="my-4 p-4 bg-gray-100 rounded-lg shadow">
            <fieldset>
                <legend className="block text-lg font-medium text-gray-700">{details.question}</legend>
                <div className="mt-2 space-y-2">
                    {details.options.map(option => (
                        <div key={option} className="flex items-center">
                            <input
                                type="radio"
                                id={`${details.id}-${option}`}
                                name={details.id}
                                value={option}
                                checked={value === option}
                                onChange={handleOptionChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor={`${details.id}-${option}`} className="ml-3 block text-sm font-medium text-gray-700">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}

export default PatientReportOptions;
