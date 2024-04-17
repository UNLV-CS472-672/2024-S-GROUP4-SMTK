import { getEvents } from "@/util/eventUtils";

/**
 * Handles the API request for fetching events from the database
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the request is handled. 
 */
export default async function handler (req, res){
    if(req.method === 'GET'){
        const events = await getEvents();
        res.status(200).json(events);
    } else {
        res.status(405).json({ message: 'Method not allowed'});
    }
};