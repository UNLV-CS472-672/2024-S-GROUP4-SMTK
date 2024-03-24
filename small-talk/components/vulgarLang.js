// PLEASE BE ADVISED
// DICTIONARY OF VULGAR LANGUAGE BELOW
// VIEW AT OWN DISCRETION


import swearWords from './swearWords.js';

export default async function vulgar(input) {
    const inputinput = input.toLowerCase(); // make sure check for all cases
    for (let swearWord of swearWords) { // check for all swear words
        if (inputinput.includes(swearWord)) {
            return true; // bad lang detected
        }
    }
    return false;
}
