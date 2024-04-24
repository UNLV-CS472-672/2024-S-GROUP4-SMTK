import React from 'react';
import ProfileIcon from '@/components/profileIcon';

function IndividualFriend({ details }) {
    return (
        <div className="border p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            {/* add profileIcon component here */}
            <ProfileIcon avatarID={details.avatar} backgroundID={details.background} avatarClass={'w-10'} backgroundClass={'p-2'}/>
            <div>
                <p className="font-bold">{details.name}</p>
                <h3 className="font-thin">{details.username}</h3>
                <p className={`block rounded-full h-2.5 w-2.5 ${details.status ? 'bg-green-500' : 'bg-gray-400'}`} data-testid='user-status-dot'></p>
            </div>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                View Profile
            </button>
        </div>
    );
}

export default IndividualFriend;