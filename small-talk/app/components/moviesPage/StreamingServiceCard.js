import React from 'react';

function StreamingServiceCard({ service }) {
    return (
        <div className="relative group m-2 flex-shrink-0" style={{ width: '200px', height: '200px' }}>
            <div className="w-full h-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={service.logo} alt={service.name} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StreamingServiceCard;
