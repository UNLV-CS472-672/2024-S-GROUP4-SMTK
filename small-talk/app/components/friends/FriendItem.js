import Friends from '@/pages/friends';
import React, { useState } from 'react';
import RecommendedFriend from './RecommendedFriends';

function FriendItem(){
    return (
        <div className="bg-white shadow-md rounded-lg p-5 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Friends</h2>
            <div className="mt-6 p-4 bg-blue-100 rounded-md text-blue-800">
            </div>
        </div>
    );
}

export default FriendItem;