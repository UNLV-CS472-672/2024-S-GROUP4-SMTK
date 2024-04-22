import React from 'react';
import R_IndividualFriend from './R_individualFriend';
import exampleR_FriendData from '../../data/exampleR_FriendData.json';

function R_FriendLayout() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Recommended Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exampleR_FriendData.map(exampleR_FriendData => (
                    <R_IndividualFriend 
                        key={exampleR_FriendData.id}
                        details={exampleR_FriendData}
                    />
                ))}
            </div>
        </div>
    );
}

export default R_FriendLayout;