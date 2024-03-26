import { getCookie } from '../util/smolCookie.js'; 

describe('getCookie function', () => {
    it('should return the value of the specified cookie from a string of cookies', () => {
        const cookiesString = 'session_id=abc123; location=New York; user_id=12345';
        
        // Testing each cookie individually
        expect(getCookie('session_id', cookiesString)).toBe('abc123');
        expect(getCookie('location', cookiesString)).toBe('New York');
        expect(getCookie('user_id', cookiesString)).toBe('12345');

        // Testing for non-existing cookie
        expect(getCookie('non_existing_cookie', cookiesString)).toBe('');

        // Testing if empty string is returned for empty input
        expect(getCookie('session_id', '')).toBe('');
    });

});