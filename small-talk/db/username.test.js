import userExists from './username';
import Mongoboi from './mongo';

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
    mockConstructor.mockClear();

});

describe('userExists', () => {

    it('should return true if username is not found in the database', async () => {
        mockFindOne.mockResolvedValue(null);
        const result = await userExists('nonexistentuser');

        expect(result).toBe(true);
        expect(mockFindOne).toHaveBeenCalledWith('patients', { username: 'nonexistentuser' });
    });

    it('should return false if username is found in the database', async () => {
      mockFindOne.mockResolvedValue(!null);
      const result = await userExists('jd1924');

      expect(result).toBe(false);
      expect(mockFindOne).toHaveBeenCalledWith('patients', { username: 'jd1924' });
  });
});
