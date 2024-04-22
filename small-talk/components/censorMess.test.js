import censor from './censorMess.js';
//ai-gen start (ChatGPT-4, 1)
// Mock the swearWords module
jest.mock('./swearWords.js', () => {
    return ['badword', 'anotherbadword'];
})

describe('censor function', () => {
    it('should replace swear words with asterisks', () => {
        const input = 'This is a badword and anotherbadword in a sentence.';
        const expectedOutput = 'This is a ******* and ************** in a sentence.';
        expect(censor(input)).toBe(expectedOutput);
    });

    it('should return the same string if there are no swear words', () => {
        const input = 'This is a clean sentence.';
        expect(censor(input)).toBe(input);
    });
});
//ai-gen end
