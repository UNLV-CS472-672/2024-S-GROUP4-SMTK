export default async function validateInput(input) {
    const forbiddenChars = /['"<>\/`]/; // add characters to be blocked bewteen the /[ ]/

    if (typeof input != 'string') {
        return false; // ensure working with string
    }

    if (input.length > 31 || forbiddenChars.test(input)) { 
        // alert("testing" + input + forbiddenChars.test(input)); //check to see if working
        return false; // checks to see if string is too long or fails forbidden test
    }
    
    return true; // validation was successful
}
