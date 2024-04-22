import React, { useState } from 'react';
import MedicationItem from './MedicationItem';
import medicationData from '../../data/healthData/MedicationData.json';

function MedicationSchedule() {
    const [medications, setMedications] = useState(medicationData);

    const toggleMedicationTaken = (id) => {
        const updatedMedications = medications.map(med => {
            if (med.id === id) {
                return {...med, taken: !med.taken};
            }
            return med;
        });
        setMedications(updatedMedications);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-5 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Daily Medication Schedule</h2>
            <div className="grid grid-cols-3 gap-4">
                {medications.map(med => (
                    <MedicationItem
                        key={med.id}
                        details={med}
                        onToggleTaken={() => toggleMedicationTaken(med.id)}
                    />
                ))}
            </div>
            <div className="mt-6 p-4 bg-blue-100 rounded-md text-blue-800">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span>Allow notifications for future medications</span>
                </label>
            </div>
        </div>
    );
}

export default MedicationSchedule;
