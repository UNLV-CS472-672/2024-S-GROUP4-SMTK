import Mongoboi from "../../db/mongo"

export default async function POST(req, res) {
    const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_URL
    const mongoboi = new Mongoboi(uri, "Chatrooms");
    if (req.body) {
        let { messagetxt } = JSON.parse(req.body);

        const messageVar = {
            message: messagetxt
        };
        
        try {
            await mongoboi.connect(); // establish connection to the database
            await mongoboi.insertOne("cr01", messageVar); // Inserting a new document into the "chatroom" collection
            return messageVar; // Returning the newly inserted user
        } 
        catch (error) {
            console.error("Error writing to database:", error);
            return null; // Returning null if there's an error
        }
        finally { // ensure that the database connection is closed even if an exception is caught/thrown
            await mongoboi.disconnect(); 
        }
    }

}