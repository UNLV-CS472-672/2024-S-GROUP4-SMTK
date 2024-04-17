import { getLatestEventsByQuery } from "./mongoUtils";

/**
 * Retrieves the latest # of events based on the integer passed.
 * 
 * @returns {Array} - An array of all events from the database.
 */
export const getEvents = async () => {
    const events = await getLatestEventsByQuery('Bullewwwwtins', 'announcements', 10);
    return events;
}

export default getEvents;