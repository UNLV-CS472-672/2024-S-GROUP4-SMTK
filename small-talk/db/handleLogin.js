"use server"
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import bcrypt from 'bcryptjs'
import Mongoboi from "./mongo"
export default async function handleSubmit(username, password) {
  "use server"
  const mongoboi = new Mongoboi(uri, "Users")
  var findUser = { // look for user with specified username
    username: username,
  }
  await mongoboi.connect();
  const user = await mongoboi.findOne("patients", findUser) // ensure that the username occurs in the database
  await mongoboi.disconnect();
  if (user == null){ // will return null if username is not found in the database
    return null;
  }

  const matching = await bcrypt.compare(password, user.password); //compares user input with stored hash password

  if(matching){
    return user; //returns the user if creds are good
  }
  return null;
}