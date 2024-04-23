import React from 'react';

function HealthcareProviderItem({ details }) {
    return (
        <div className="border p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            <div>
                <h3 className="font-bold">{details.name} - {details.role}</h3>
                <p className="text-sm">{details.available ? 'Available' : 'Not Available'}</p>
            </div>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Message
            </button>
        </div>
    );
}

export default HealthcareProviderItem;
