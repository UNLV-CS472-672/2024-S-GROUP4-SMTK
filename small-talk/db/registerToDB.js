"use server"
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_URL
import Mongoboi from "./mongo"
import bcrypt from "bcryptjs";
export default async function handleRegister(username, password, firstname, lastname, dob){ // function that sends the credentials to the database
  const mongoboi = new Mongoboi(uri, "Users");
  const date = new Date(dob).getTime() / 1000; // return the inputted date as a Unix timestamp
  
  const newUser = { // schema for holding the values into certain fields for database organization
    username: username,
    firstname: firstname,
    lastname: lastname,
    dob: date,
  };

  try {
    const salt = await bcrypt.genSalt(10);
    console.log('Generated salt: ', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password:', hashedPassword);
    newUser.password = hashedPassword;
  } catch (error) {
    console.error("Error salting or hashing password:", error);
    return null; // Proper error handling
  }

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
