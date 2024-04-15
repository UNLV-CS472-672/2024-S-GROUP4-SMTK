import { getAllUsernamesInDB } from './mongoUtils.js';

/**
 * Retrieves the online status of a list of users passed in.
 * Temporarily defaults to all online
*
* @param {Array} users - An array of patient's username strings. Defaults to all patients in the database.
* @returns {Array} - An array of objects in the form of {username: string, online: boolean}.
*                    Returns an empty list if any errors are handled in its implementation.
*/
export const getPatientsOnlineStatus = async (usernames) => {
    // TODO: form function to attach user online status to each user
    // Currently only returns a list of all users with all online
    if (!usernames) 
        usernames = await getAllPatientUsernames();

    // Check once again in case no usernames could be found. Return an empty list if so
    if (usernames.length === 0)
        return [];
    
    const otherUsernames = removeCurrentUsername(usernames);
    const onlineUsernames = makeAllOnline(otherUsernames);
    return onlineUsernames;
}


/**
 * Retrieves all users from the database with their online statuses.
 * Temporarily defaults to all online.
 * 
 * @returns {Array} - An array of all username strings from the database.
 */
export const getAllPatientUsernames = async () => {
    const usernames = await getAllUsernamesInDB('Users', 'patients');
    return usernames;
}


/**
 * Removes the current patient from the list of patients.
 * @param {Array} users - The list of users.
 * @returns {Array} - The updated list of users without the current user.
 */
export const removeCurrentUsername = (usernames) => {
    const currentUsername = getCurrentUsername();
    return usernames.filter(username => username !== currentUsername);
}


/**
 * Retrieves the current username
 * @returns {string} The current username.
 */
export const getCurrentUsername = () =>{
    // TODO: Get the username from the current cookie
    // TODO: Create a function to get the username from the sessionID hash
    // Currently only returns a default username that exists in the database
    // Will be expanded to get the username from the sessionID hash
    return "hello";
}


// Temporary function to give an online status to all users
export const makeAllOnline = (patientUsernames) => {
    return patientUsernames.map(patientUsername => {
        return {username: patientUsername, online: true};
    });
}

export default getPatientsOnlineStatus;