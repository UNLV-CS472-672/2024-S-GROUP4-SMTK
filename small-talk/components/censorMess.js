import swearWords from './swearWords.js';

export default function censor(input) {
    const inputinput = input.toLowerCase(); // make sure check for all cases
    let censored = inputinput;
    for (let swearWord of swearWords) { // check for all swear words
        const regex = new RegExp(`\\b${swearWord}\\b`, 'gi'); // used AI to match words and replace
        censored = censored.replace(regex, '*'.repeat(swearWord.length)); // replaces vulgar language with ****
    }
    return censored;
}
