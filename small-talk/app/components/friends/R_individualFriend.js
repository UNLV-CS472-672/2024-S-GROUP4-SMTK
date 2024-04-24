import React from 'react';

function R_IndividualFriend({ details }) {
    return (
        <div className="border p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            <img src={details.img} width="50" height="50"></img>  
            <div>
                <p className="font-bold">{details.name}</p>
                <h3 className="font-thin">{details.username}</h3>
                <p className={`block rounded-full h-2.5 w-2.5 ${details.status ? 'bg-green-500' : 'bg-gray-400'}`} data-testid='user-status-dot'></p>
            </div>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                Add Friend +
            </button>
        </div>
    );
}

export default R_IndividualFriend;