import { createCookieHash } from "@/util/smolCwypto.js";
describe('createCookieHash', () => {
    const secretKey = 'mySecretKey';

    it('should create a valid hash', () => {
        const data = { username: 'testUser',  password: 'testPassword', timestamp: Date.now() };
        const hash = createCookieHash(data, secretKey);

        // Add your assertions here
        expect(typeof hash).toBe('string');
        //expect(hash).to.have.lengthOf(64); // SHA-256 hash length
    });

    it('should handle empty data', () => {
        const emptyData = {};
        const hash = createCookieHash(emptyData, secretKey);

        // Add assertions for empty data
        expect(typeof hash).toBe('string');
        //expect(hash).to.have.lengthOf(64);
    });

    // Add more test cases as needed
});
