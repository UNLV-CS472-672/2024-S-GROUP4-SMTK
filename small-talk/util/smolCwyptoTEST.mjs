import { createCookieHash } from "@/util/smolCwypto.js";

describe('createCookieHash', () => {
    it('should create a valid hash', () => {
        const data = { username: 'user123', timestamp: Date.now() };
        const secretKey = 'mySecretKey';

        const hash = createCookieHash(data, secretKey);

        // Add your assertions here
        expect(hash).to.be.a('string');
        expect(hash).to.have.lengthOf(64); // SHA-256 hash length
    });

    it('should handle empty data', () => {
        const emptyData = {};
        const hash = createCookieHash(emptyData, secretKey);

        // Add assertions for empty data
        expect(hash).to.be.a('string');
        expect(hash).to.have.lengthOf(64);
    });

    // Add more test cases as needed
});//
