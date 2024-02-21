"use client"
import { useState } from "react";
import handleSubmit from "@/db/hsTest"

export default function LoginPage() {
  var status = "Submit";
  const [textInput, setTextInput] = useState(null);

  const handleLogin = () => {
    // if log in successfully
    window.location.href = "/homepage"; // Redirect to the homepage
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-black">
      {(textInput == null) ? <div></div>: <div className="text-white">hello {textInput.firstname}</div>}
        <img src="/placeholder-logo.png" alt="Description of the image"></img>
      <div className="rounded-md bg-sky-500/50 p-10 m-4">
      <form action={async (formData) => {
        const data = await handleSubmit(formData)
        if (data != null) {
          setTextInput(data)
        }
      }}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className='p-5 m-5'
              
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-5 m-5"
            //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must contain at least
              - one(1) number
              - one(1) upper case letter
              - one(1) lower case letter
              - eight(8) or more characters"
            // required
            //   minlength = "8"
              
          />
        </div>
        <button id ="login"type="submit" className='p-5 m-5 rounded-md bg-green-400' onClick={handleLogin}>{status}</button>
        
      </form>
      
      </div>
    </div>
  )
}
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