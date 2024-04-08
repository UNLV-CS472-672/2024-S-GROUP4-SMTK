import React from 'react';
import UserStatus from './UserStatus';
import { useState, useEffect } from 'react';


/**
 * This component renders a grid of patients and their online status.
 * As of now, it lists every user from the database. In the future it should
 * be changed to only include friends of the current user.
 */

const FriendsList = () => {
    const [patients, setPatients] = useState([]);

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
        <div className="overflow-x-auto" data-testid='friends-list'>
            <div className="grid grid-flow-col grid-rows-3 gap-4 p-4">
            {patients.map((user, index) => (
                <div key={index} className="flex flex-col items-center">
                    <UserStatus username={user.username} onlineStatus={user.online} />
                </div>
            ))}
            </div>
        </div>
    );
};

export default FriendsList;