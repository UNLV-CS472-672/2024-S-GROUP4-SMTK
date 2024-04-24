import React from 'react';
import StreamingServiceCard from './StreamingServiceCard';
import servicesData from '../../data/moviesData/streamingServices.json'; // Path to your streaming services JSON data

function StreamingServicesRow({ title }) {
    return (
        <div className="mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
            <div className="flex flex-no-wrap overflow-x-auto space-x-4 pl-4">
                {servicesData.map(service => (
                    <StreamingServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default StreamingServicesRow;
