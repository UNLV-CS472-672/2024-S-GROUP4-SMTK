"use server"
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_URL
import { createCookieHash } from '@/util/smolCwypto'
import bcrypt from 'bcryptjs'
import Mongoboi from "./mongo"

export default async function handleSubmit(username, password) {
  "use server"
  const mongoboi = new Mongoboi(uri, "Users")
  const findUser = { username: username };  // Look for user with specified username
  const rand_num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  const session_id = createCookieHash(rand_num, "apple");

  await mongoboi.connect();
  let user = await mongoboi.findOne("patients", findUser);  // Ensure that the username occurs in the database

  if (user == null) {  // Will return null if username is not found in the database
    await mongoboi.disconnect();
    return null;
  }

  const matching = await bcrypt.compare(password, user.password);  // Compares user input with stored hash password

  if (matching) {
    const updateData = { $set: { session_id: session_id } };  // Specify field to update
    const update = await mongoboi.updateOne("patients", findUser, updateData);
    console.log("Updated session_id:", session_id);
    await mongoboi.disconnect();
    return { ...user, session_id };  // Returns the user with the updated session_id
  }

  await mongoboi.disconnect();
  return null;
}
