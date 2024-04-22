import React from 'react';
import IndividualFriend from './individualFriend';
import exampleFriendData from '../../data/exampleFriendData.json';

function FriendLayout() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exampleFriendData.map(exampleFriendData => (
                    <IndividualFriend 
                        key={exampleFriendData.id}
                        details={exampleFriendData}
                    />
                ))}
            </div>
        </div>
    );
}

export default FriendLayout;