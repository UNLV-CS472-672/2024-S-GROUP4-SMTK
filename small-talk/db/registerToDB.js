"use server"
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
export default async function handleRegister(username, password, firstname, lastname, dob){ // function that sends the credentials to the database
  const mongoboi = new Mongoboi(uri, "Users");
  const date = new Date(dob).getTime() / 1000; // return the inputted date as a Unix timestamp
  await mongoboi.connect();

  const newUser = { // schema for holding the values into certain fields for database organization
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    dob: date,
  };

  try {
    await mongoboi.connect(); // establish connection to the database
    await mongoboi.insertOne("patients", newUser); // Inserting a new document into the "patients" collection
    return newUser; // Returning the newly inserted user
  } 
  catch (error) {
    console.error("Error writing to database:", error);
    return null; // Returning null if there's an error
  }
  finally { // ensure that the database connection is closed even if an exception is caught/thrown
    await mongoboi.disconnect(); 
  }
}
