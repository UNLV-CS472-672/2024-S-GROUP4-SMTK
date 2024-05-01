"use client"
import React, { useEffect } from "react";
import { useState } from "react";
//import Mongoboi from  "@/db/mongo"
import handleSubmit from "@/db/handleLogin"
//const Mongoboi = require("@/db/mongo");
import validateInput from '@/components/inputValidation';
import { getCookie } from "@/util/smolCookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { push } = useRouter();
  var status = "Submit"; // name/text for the button
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [session_id, setSession_id] = useState(null);

  useEffect(()=> {
    const s = fetchCookieString();
    console.log("useEffect after function call: " + s)
    setSession_id(s)
    console.log("useEffect: "+ s)
    console.log("useEffect: "+ session_id)
    if (s != null) {
      push('/')
    }
    console.log("useEffect under branch: " + s)
  },[])
  const handleLogin = () => {
    // if login sucessful
    window.location.href = "/homepage"; // Redirect to the homepage
  };
  const handleAdmin = () => {
    // if login sucessful
    window.location.href = "/accountCreate"; // Redirect to the homepage
  };

  const fetchCookieString = () => {
    const cookies = document.cookie;
    if (cookies == null || cookies == "")
    {
      console.log("/login fetchCookieString: NO COOKIES - " + cookies)
      return null;
    } 
    console.log("/login fetchCookieString: COOKIES - " + cookies)
    const s_id = getCookie("session_id", document.cookie);
    if (s_id == null || s_id == "")
    {
      console.log("/login fetchCookieString: NO SESSION ID - " + s_id)
      return null;
    }
    console.log("/login fetchCookieString: SESSION_ID" + s_id)
    return s_id;
  }
  const authenticateUP = async (event) => {
    //form isnt submitted by default

    event.preventDefault();
    let ok = false;

    //checks if user/pw is blank
    if(!username || !password){
      alert("All fields are necessary!");
      return ok;
    }
    if(!(await validateInput(username)) || !(await validateInput(password))){
      alert("INVALID"); // used less descriptive error code to hide the checks we use
      return;
    }
    
    // checks if the credentials are in the database
    const user = await handleSubmit(username, password)
    if (user == null){
      alert("Invalid login!");
      return ok;
    }else
    {
      document.cookie += "session_id="+ user.session_id+";";
    }

    ok = true;
    handleLogin(); //calls for redirection to login page
    return ok;
  }

  return (
    <div data-testid='login' className="h-screen w-screen flex flex-col items-center justify-center text-black">
        <img src="/img/logo.png" alt="Description of the image"  width='300'></img>
      <div className="rounded-md bg-sky-500/50 p-5 m-4">
      {/* <form action={async (formData) => {
        const data = await handleSubmit(formData)
        if (data != null) {
          setTextInput(data)
        }
        else{
          alert("Invalid login!")
        }
      }}> */}
      <form>
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            data-testid='username'
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            className='p-5 m-5'
            
              
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            data-testid='password'
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="p-5 m-5"
            required
            // below will be for admin register
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // title="Password must contain at least
            //   - one(1) number
            //   - one(1) upper case letter
            //   - one(1) lower case letter
            //   - eight(8) or more characters"
           // value = {password}
            
            // required
            //   minlength = "8"
              
          />
        </div>
        <button 
          data-testid='submit'
          id ="login"
          type="submit"
          className='p-5 m-5 rounded-md bg-green-400' 
          //recieved the confirmation that user is done inputting
          //proceed to check if User/PW ok
          onClick={authenticateUP}
        >{status}
        </button>

        <button
          id="adminCreateButton"
          type="adminCreate" 
          className='p-5 m-2 rounded-md bg-orange-400' 
          onClick={handleAdmin}
        >{"New Patient"}
        </button>
      </form>
      
      </div>
    </div>
  )
}

//macgyvers code
/*
import { useRouter } from 'next/navigation'

export default function Test() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
 
    const res = await response.json()
    if(res.ok) {
      Router.push('/here')
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-black">
        <img src="/placeholder-logo.png" alt="Description of the image"></img>
      <div className="rounded-md bg-sky-500/50 p-10 m-4">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className='p-5 m-5'
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="p-5 m-5"
          />
        </div>
        <button type="submit" className='p-5 m-5 rounded-md bg-green-400'>Submit</button>
      </form>
      
      </div>
    </div>
  );
}
*/