import React from 'react';
import UserStatus from './UserStatus';
import { useState, useEffect } from 'react';
import '@/styles/custom.css';


/**
 * This component renders a grid of patients and their online status.
 * As of now, it lists every user from the database. In the future it should
 * be changed to only include friends of the current user.
 * 
 * @param {function} onSelectUser - Function to call when a user is selected
 * @param {string} selectedUser - The currently selected user
 */

const FriendsList = ({ onSelectUser, selectedUser }) => {
    const [patients, setPatients] = useState([]);


    // Function to check if a given user is currently selected
    const isCurrentlySelected = (username) => {
        return selectedUser && selectedUser.username === username;
    };

    // Runs right when the page is loaded. Expect some wait time before the patients are loaded.
    // In the future, we can have certain events update this list, in the case of a user connecting or disconnecting.
    useEffect(() => {
        // Defines the function that will be run once the useEffect is called
        const fetchPatients = async () => {
            // Since we want the methods used to interact with mongodb to be server-side only, we use the fetch API to call the API we made in pages/api/patients.js
            // The API can be expanded to be more robust, but as of now, the GET patients endpoint returns all patients in the database and their online statuses
            // Defaults to a GET request for this endpoint
            const res = await fetch('/api/patients');
            const data = await res.json();
            setPatients(data);
        };

        // Actually calls the function that this useEffect is intended to use
        fetchPatients();
    }, []);

    // Defines the grid that will be rendered with all the patients. Maps all patients to a unique UserStatus component with its username and online status
    // The grid will scroll when overflowing. The grid is set to display in rows of 3, but this can be changed to any number of rows
    return (
        <div className="friends-list" data-testid='friends-list'>
            {patients.map((user, index) => (
                <div key={index} 
                className={`
                    friend-selection 
                    ${isCurrentlySelected(user.username) ? 'selected-friend' : ''}
                    
                `}
                data-testid={`
                    ${isCurrentlySelected(user.username) ? 'selected-friend' : ''}
                `}
                onClick={() => onSelectUser(user)}>
                    <UserStatus username={user.username} onlineStatus={user.online} />
                </div>
            ))}
        </div>
    );
};

export default FriendsList;