import swearWords from './swearWords.js';

export default function censor(input) {
    let censored = input;
    for (let swearWord of swearWords) { // check for all swear words
        const regex = new RegExp(`\\b${swearWord}\\b`, 'gi'); // used AI to match words and replace
        // checks for case insensitivity
        // returns unaltered message otherwise
     
        censored = censored.replace(regex, '*'.repeat(swearWord.length)); // replaces vulgar language with ****
    }
    return censored;
}
