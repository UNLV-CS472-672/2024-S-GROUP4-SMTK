import React from 'react';
import HealthcareProviderItem from './HealthcareProviderItem';
import providerData from '../../data/healthData/ProviderData.json';

function HealthcareTeam() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Healthcare Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {providerData.map(provider => (
                    <HealthcareProviderItem
                        key={provider.id}
                        details={provider}
                    />
                ))}
            </div>
        </div>
    );
}

export default HealthcareTeam;
