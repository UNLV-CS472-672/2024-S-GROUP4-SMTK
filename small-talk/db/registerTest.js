"use server"
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
export default async function handleRegister(username, password, firstname, lastname, dob){
  const mongoboi = new Mongoboi(uri, "Users");
  await mongoboi.connect();

  const newUser = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    dob: dob,
  };

  try {
    await mongoboi.connect();
    await mongoboi.insertOne("patients", newUser); // Inserting a new document into the "patients" collection
    await mongoboi.disconnect();
    return newUser; // Returning the newly inserted user
  } 
  
  catch (error) {
    console.error("Error writing to database:", error);
    await mongoboi.disconnect();
    return null; // Returning null if there's an error
  }
}
