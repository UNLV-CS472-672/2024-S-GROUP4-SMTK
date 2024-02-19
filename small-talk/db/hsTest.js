"use server"
import Mongoboi from "./mongo"
export default async function handleSubmit(formData) {
    "use server"
    var uri = ""
    const mongoboi = new Mongoboi(uri, "Users")
    const date = new Date('January 1, 1980');
    var filter = {
      username: formData.get('username'),
      password: formData.get('password'),
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