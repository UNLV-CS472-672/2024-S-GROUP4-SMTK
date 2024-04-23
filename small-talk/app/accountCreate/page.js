"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import userExists from "@/db/username"
import handleRegister from "@/db/registerToDB"
import validateInput from '@/components/inputValidation';
import vulgar from '@/components/vulgarLang';

export default function RegisterPage() {
    var status = "Submit"; // name/text for the button
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //in the future we can do something with patient history
    //const history = useHistory();
    const [textInput, setTextInput] = useState(null);
    const [PrivacyChecked, setPrivacyChecked] = useState(false); // New state for checkbox
    
    const goLogin = () => {
      window.location.href = "/login"; // Redirect to the login
    }

    const getAge = (dob) => {
      var today = new Date();
      var birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

    const RegisterPatient = async () => {
      // if login sucessful
      if(await handleRegister(username, password, firstName, lastName, dob) != null){
        alert("Registration was SUCCESSFUL");
        window.location.href = "/login"; // Redirect to the login page
      }
      else{
        alert("Registration was unsuccessful");
      }
    };
  
    const checkUP = async (event) => {
        //form isnt submitted by default
        event.preventDefault();
        let ok = false;
        
        //checks if all fields are filled   
        if(!username || !password || !firstName || !lastName || !dob){
          alert("All fields are necessary!");
          return;
        }
        
        if(!(await validateInput(firstName))){
          alert("First Name: Too many characters or Use of prohibited characters");
          return;
        }
        
        if(!(await validateInput(lastName))){
          alert("Last Name: Too many characters or Use of prohibited characters");
          return;
        }

        if(!(await validateInput(username))){
          alert("Username: Too many characters or Use of prohibited characters");
          return;
        }

        if(!(await validateInput(password))){
          alert("Password: Too many characters or Use of prohibited characters");
          return;
        }

        if(await vulgar(username)){
          alert("*** Username: Vulgar Language Detected ***");
          return;
        }

        if(await vulgar(password)){
          alert("*** Password: Vulgar Language Detected ***");
          return;
        }
        
        if(username.toLowerCase().includes(firstName.toLowerCase()) || username.toLowerCase().includes(lastName.toLowerCase())){
          alert("Username cannot contain first or last name.");
          return
        }

        if(password.toLowerCase().includes(firstName.toLowerCase()) || password.toLowerCase().includes(lastName.toLowerCase())){
          alert("Password cannot contain first or last name.");
          return
        }

        if(username.toLowerCase().includes(password.toLowerCase()) || password.toLowerCase().includes(username.toLowerCase())){
          alert("Username cannot contain password or vice versa.");
          return
        }

        if(await userExists(username) == false){
          alert("Username is already taken!");
          return
        }

        //define pw pattern
        let pwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        
        //checks if pw matches the above pattern
        if (!password.match(pwPattern)){
            alert("Password must contain at least: \n- one number \n- one uppercase letter \n- one lowercase letter \n- eight(8) characters");
            return
        }

        if(!PrivacyChecked){
          alert("Please agree to the Privacy Policy / Terms & Conditions.")
          return
        }

        if(getAge(dob) < 13){
          alert("By using this web app, you confirm that you are 13 years of age or older, or have obtained parental consent. If you are under 13, please do not use this app without parental permission. We are committed to protecting the privacy of children online and comply with the Children's Online Privacy Protection Act (COPPA). For more information, please review our Privacy Policy.")
        }
      
        RegisterPatient() //calls for redirection to login page
        return
    }
      
  
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center text-black">
          <img src="/img/logo.png" alt="Description of the image" width='300'></img>
        <div className="rounded-md bg-sky-500/50 p-10 m-4">
        <form action>
            <div>
                <label
                    htmlFor="fName"
                    >First Name
                </label>
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    className='p-5 m-5'
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="lname"
                    >Last Name
                </label>
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    className='p-5 m-5'
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="dob"
                    >Birth Date    
                </label>

                <input
                    onChange={(e) => setDob(e.target.value)}
                    id="dob"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    className='p-5 m-5'
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="user"
                    >Username
                </label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    className='p-5 m-5'
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="pw"
                    >Password
                </label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
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

          
            
            
            <div>
                <label htmlFor="privacyCheckbox">
                  <input
                    type="checkbox"
                    id="privacyCheckbox"
                    onChange={(e) => setPrivacyChecked(e.target.checked)}
                    required
                  />
                    I have read the Privacy Policy / Terms and Conditions
                </label>
            </div>

            <button 
                id ="login"
                type="submit"
                className='p-5 m-5 rounded-md bg-green-400' 
                //recieved the confirmation that user is done inputting
                //proceed to check if User/PW ok
                onClick={checkUP} 
                >{status}
            </button>
  
          <button
            id="cancelButton"
            type="button" 
            className='p-5 m-2 rounded-md bg-red-400' 
            onClick={goLogin} 
          >{"Cancel"}
          </button>
        </form>
        
        </div>
      </div>
    )
  }