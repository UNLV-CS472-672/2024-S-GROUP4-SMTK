"use server"
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
export default async function userExists(username) {
    "use server"
    const mongoboi = new Mongoboi(uri, "Users")
    var filter = {
      username: username, //check for existing username in db
    }
    await mongoboi.connect();
    const user = await mongoboi.findOne("patients", filter)
    await mongoboi.disconnect();
  
    if (user != null) {
      return false; //username is used
    }
    return true; // username is not taken
  }