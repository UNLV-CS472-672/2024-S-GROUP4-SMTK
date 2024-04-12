import React from 'react';
import { mockFetch } from './mockFetch';

/**
 * 
 * @param {String} username - The username of the user.
 * @param {Boolean} onlineStatus - The online status of the user.
 * @returns {JSX.Element} - A JSX Element that displays the username and online status of the user in the same row
 */

const UserStatus = ({ username, onlineStatus }) => {
    return (
        // Displays the username, then determines if the user is online or not and displays a green dot if they are, otherwise a gray dot
        <div className='flex items-center space-x-2'>
            <h2>{username}</h2>
            <span className={`block rounded-full h-2.5 w-2.5 ${onlineStatus ? 'bg-green-500' : 'bg-gray-400'}`} data-testid='user-status-dot'></span> 
        </div>
    );
};

export default UserStatus;
