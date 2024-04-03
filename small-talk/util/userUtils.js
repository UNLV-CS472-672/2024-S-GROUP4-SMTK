
/**
 * Retrieves the current username.
 * @returns {string} The current username.
 */
export const getCurrentUsername = () => {
    // TODO: Add the username to the sessionID hash
    // TODO: Create a function to get the username from the sessionID hash
    // Currently only returns a default username that exists in the database
    // Will be expanded to get the username from the sessionID hash
    return "DefaultUsername";
}


/**
 * Retrieves all users from the database.
 * 
 * @returns {Array} - An array of all username strings from the database.
 */
export const getAllUsers = () => {
    // TODO: Get all users from the database
    return [];
}


/**
 * Retrieves the online status of a list of users passed in.
 *
 * @param {Array} users - An array of username strings.
 * @returns {Array} - An array of username strings with their online status.
 */
export const getUsersOnlineStatus = (users = getAllUsers()) => {
    // TODO: Get all users from the database and check their online status
    
    return [];
}

