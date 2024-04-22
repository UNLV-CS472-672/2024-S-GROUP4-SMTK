import React, { useState } from 'react';

function PatientReportSlider({ details, value, setValue }) {

    return (
        <div className="my-4 p-4 bg-gray-100 rounded-lg shadow">
            <label htmlFor={details.id} className="block text-lg font-medium text-gray-700">{details.question}</label>
            <div className="mt-2 flex items-center">
                <input
                    type="range"
                    id={details.id}
                    name={details.name}
                    min={details.min}
                    max={details.max}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-4 text-gray-800">{value}</span>
            </div>
        </div>
    );
}

export default PatientReportSlider;
