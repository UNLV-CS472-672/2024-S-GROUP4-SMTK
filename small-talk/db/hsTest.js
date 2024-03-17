"use server"
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
export default async function handleSubmit(username, password) {
    "use server"
    const mongoboi = new Mongoboi(uri, "Users")
    const date = new Date('January 1, 1980');
    var filter = {
      username: username,
      password: password,
    }
    await mongoboi.connect();
    const user = await mongoboi.findOne("patients", filter)
    await mongoboi.disconnect();

    if (user != null) {
      return user
    }
    return null;
    //console.log(user)
    /*
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
    */
  }