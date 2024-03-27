import handleSubmit from './handleLogin';
import Mongoboi from './mongo';
import bcrypt from 'bcryptjs';  

const mockFindOne = jest.fn();
const mockConstructor = jest.fn();
jest.mock('./mongo', () => {
    return jest.fn().mockImplementation(() => {
        return {
            findOne: mockFindOne,
            connect: jest.fn(),
            disconnect: jest.fn(),
            constructor: mockConstructor,
        };
    });
});

beforeEach(() => {
    mockFindOne.mockClear();
    mockConstructor.mockClear();

});

describe('handleLogin', () => {

    it('should return null if username is not found in the database', async () => {
        mockFindOne.mockResolvedValue(null);
        const result = await handleSubmit('nonexistentuser', 'password123');

        expect(result).toBeNull();
        expect(mockFindOne).toHaveBeenCalledWith('patients', { username: 'nonexistentuser' });
    });

    it('should return null if password is incorrect', async () => {
        const mockUser = {
            username: 'existinguser',
            password: '$2a$10$3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d', // hashed password
        };
        mockFindOne.mockResolvedValue(mockUser);
        jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

        const result = await handleSubmit('existinguser', 'wrongpassword');

        expect(result).toBeNull();
        expect(mockFindOne).toHaveBeenCalledWith('patients', { username: 'existinguser' });
        expect(bcrypt.compare).toHaveBeenCalledWith('wrongpassword', mockUser.password);
    });

    it('should return the user object if credentials are correct', async () => {
        const mockUser = {
            username: 'existinguser',
            password: '$2a$10$3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d3Y5d', // hashed password
            // Include other properties of the user object here
        };
        mockFindOne.mockResolvedValue(mockUser);
        jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

        const result = await handleSubmit('existinguser', 'correctpassword');

        expect(result).toEqual(mockUser);
        expect(mockFindOne).toHaveBeenCalledWith('patients', { username: 'existinguser' });
        expect(bcrypt.compare).toHaveBeenCalledWith('correctpassword', mockUser.password);
    });
});
