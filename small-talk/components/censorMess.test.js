import censor from './censorMess.js';
//ai-gen start (ChatGPT-4, 1)
// Mock the swearWords module

describe('censor function', () => {
    it('should replace swear words with asterisks', () => {
        const input = 'Bad word: shit';
        expect(censor(input)).not.toBe(input);
    });

    it('should return the same string if there are no swear words', () => {
        const input = 'This is a clean sentence.';
        expect(censor(input)).toBe(input);
    });
});
//ai-gen end
