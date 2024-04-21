import React from 'react';

function MedicationItem({ details, onToggleTaken, className }) {
    return (
        <div className={`medication-item ${details.taken ? 'bg-green-100' : 'bg-red-100'} rounded-lg p-4 shadow ${className}`}>
            <h3 className="font-semibold text-lg">{details.name}</h3>
            <p className="text-sm">Dose: {details.dose}</p>
            <p className="text-sm">Time: {details.time}</p>
            <button 
                onClick={onToggleTaken}
                className={`mt-2 px-4 py-2 rounded text-white font-semibold ${details.taken ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
            >
                {details.taken ? 'Mark as Not Taken' : 'Mark as Taken'}
            </button>
        </div>
    );
}

export default MedicationItem;
