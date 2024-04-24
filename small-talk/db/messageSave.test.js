import handleMessageSave from './messageSave';
import Mongoboi from './mongo';

const mockInsertOne = jest.fn();
const mockConstructor = jest.fn();
jest.mock('./mongo', () => {
    return jest.fn().mockImplementation(() => {
        return {
            insertOne: mockInsertOne,
            connect: jest.fn(),
            disconnect: jest.fn(),
            constructor: mockConstructor,
        };
    });
});

beforeEach(() => {
    mockInsertOne.mockClear();
    mockConstructor.mockClear();

});

describe('handleMessageSave', () => {

    it('should add a new message', async () => {
        //using mock user to get info
        const mockMessage = {
            message: "testMessage"
        };
        //inserting mock values into the mock user
        mockInsertOne.mockResolvedValue(mockMessage);
        //waiting for the result from the function
        const result = await handleMessageSave(
            mockMessage.message
        );
        //checking to see if insert one is called
        expect(mockInsertOne).toHaveBeenCalled();
        //access mock calls if test passed
        const insertedMessage = mockInsertOne.mock.calls[0][1];
        //if correct, return true to pass the test
        expect(result).toEqual(insertedMessage);

      });

      it('should return null if there is an error', async () => {
        mockInsertOne.mockImplementation(() =>{
          throw new Error('Test error');
        });
    
        const result = await handleMessageSave("testMessage");
    
        expect(result).toBeNull();
      });
});
