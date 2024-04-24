// ai-gen start (ChatGPT-4, 2)

import Mongoboi from "@/db/mongo";

/**
 * Returns the MongoDB connection URI based on the environment variables.
 * Defaults to retryWrites=true and w=majority.
 * 
 * @returns {string} The MongoDB connection URI.
 */
export const getSmallTalkClusterMongoUri = () => {
    return "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_URL;
}


/**
 * Creates a new instance of Mongoboi and connects to the specified MongoDB database.
 * @param {string} uri - The URI of the MongoDB server.
 * @param {string} dbName - The name of the MongoDB database.
 * @returns {Mongoboi} - The connected Mongoboi instance.
 */
export const getConnectedMongoboi = async (uri, dbName) => {
    var myMongoboi =  new Mongoboi(uri, dbName);
    await myMongoboi.connect();
    return myMongoboi;
}


/**
 * Disconnects from the MongoDB database.
 * @param {Object} myMongoboi - The MongoDB connection object.
 */
export const disconnectMongoboi = async (myMongoboi) => {
    await myMongoboi.disconnect();
}


/**
 * Retrieves all usernames from the specified collection in the MongoDB database.
 * 
 * @param {string} db - The name of the database.
 * @param {string} collection - The name of the collection.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of usernames.
 */
export const getAllUsernamesInDB = async (db, collection) => {
    const users = await getAllUsersByQuery(db, collection, {}, {username: 1, _id: 0});
    
    // In case errors were encountered in the implementation, return an empty list
    if (!users)
        return [];
    
    const usernames = users.map(user => user.username);
    return usernames;
}


/**
 * Retrieves all users from a MongoDB collection based on a query and projection.
 * @param {string} db - The name of the database.
 * @param {string} collection - The name of the collection.
 * @param {object} query - The query object to filter the results.
 * @param {object} projection - The projection object to specify the fields to include or exclude.
 * @returns {Promise<Array>} - A promise that resolves to an array of users matching the query.
 */
export const getAllUsersByQuery = async (db, collection, query, projection) => {
    var myMongoboi = await getConnectedMongoboi(getSmallTalkClusterMongoUri(), db);
    const users = await myMongoboi.findAll(collection, query, projection);
    await disconnectMongoboi(myMongoboi);
    return users;
}

// ai-gen start (ChatGPT-4, 2)
