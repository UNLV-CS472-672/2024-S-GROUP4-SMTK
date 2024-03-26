/*
    Test case to check vulgarLang.js
    Go through various test to check if swear words will be properly detected in different forms. 
    This does not grab directly from the swearWords.js but it creates a mock list and checks to see if that list can be detected in various ways. 
*/
import vulgar from './vulgarLang.js';

// Mocking the list of swear words
jest.mock('./swearWords.js', () => [
    'shit',
    'numbnuts',
    'bitch'
]);

describe('vulgar', () => {
    // Test case: input contains a swear word from the list
    it('returns true if swear word detected', async () => {
        const input = 'this is a shit test';
        const result = await vulgar(input);
        expect(result).toBe(true);
    });

    // Test case: input contains multiple swear words from the list
    it('returns true if multiple swear words detected', async () => {
        const input = 'this is a BITCH and sHit test';
        const result = await vulgar(input);
        expect(result).toBe(true);
    });

    // Test case: input contains a partial match of a swear word from the list
    it('return true if partial swear word match was detected', async () => {
        const input = 'this is a partialnumbnuts test';
        const result = await vulgar(input);
        expect(result).toBe(true);
    });

    // Test case: input does not contain any swear word from the list
    it('return false if no swear word', async () => {
        const input = 'this is a clean test';
        const result = await vulgar(input);
        expect(result).toBe(false);
    });

    // Test case: input is an empty string
    it('return false for empty string', async () => {
        const input = '';
        const result = await vulgar(input);
        expect(result).toBe(false);
    });
});

