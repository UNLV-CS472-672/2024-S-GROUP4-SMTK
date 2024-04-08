import getPatientsOnlineStatus from "@/util/patientUtils";

/**
 * Handles the API request for fetching patients from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the request is handled.
 */
export default async function handler (req, res) {
    if (req.method === 'GET') {
        const patients = await getPatientsOnlineStatus();
        res.status(200).json(patients);
    }
    else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};