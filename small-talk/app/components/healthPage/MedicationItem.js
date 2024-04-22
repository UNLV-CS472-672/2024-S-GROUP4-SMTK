import React from 'react';

function MedicationItem({ details, onToggleTaken }) {
    return (
        <div className={`medication-item ${details.taken ? 'bg-green-100' : 'bg-red-100'} rounded-lg p-4 shadow flex flex-col justify-between`}>
            <div>
                <h3 className="font-semibold text-lg">{details.name}</h3>
                <p className="text-sm">Dose: {details.dose}</p>
                <p className="text-sm">Time: {details.time}</p>
                <ul className="text-xs list-disc pl-5">
                    {details.warnings.map((warning, index) => <li key={index}>{warning}</li>)}
                </ul>
            </div>
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
