"use server"
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
export default async function handleMessageSave(content){
    const mongoboi = new Mongoboi(uri, "Chatrooms");

    const messageVar = {
        message: content
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

//module.exports = handleMessageSave;