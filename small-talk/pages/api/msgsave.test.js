// AI Gen START (CHATGPT 3.5)
// Import the function to test
import POST from './msgsave';

// Import the MongoDB client class
import Mongoboi from '../../db/mongo';

// Mock the MongoDB client class
jest.mock('../../db/mongo');

describe('POST function', () => {
  test('inserts a message into the database and returns the message', async () => {
    // Mock request and response objects
    const req = {
      body: JSON.stringify({ messagetxt: 'Test message' })
    };
    const res = {};

    // Mock MongoDB connection and insertion
    const mockInsertOne = jest.fn().mockResolvedValue('Inserted message');
    Mongoboi.mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(),
      insertOne: mockInsertOne,
      disconnect: jest.fn().mockResolvedValue()
    }));

    // Call the POST function
    const result = await POST(req, res);

    // Assertions
    expect(result).toEqual({ message: 'Test message' }); // Ensure the correct message is returned
    expect(mockInsertOne).toHaveBeenCalledWith('cr01', { message: 'Test message' }); // Ensure insertOne is called with the correct arguments
  });

  test('returns null and logs an error if an error occurs during database operation', async () => {
    // Mock request and response objects
    const req = {
      body: JSON.stringify({ messagetxt: 'Test message' })
    };
    const res = {};

    // Mock MongoDB connection and insertion with error
    Mongoboi.mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(),
      insertOne: jest.fn().mockRejectedValue(new Error('Database error')),
      disconnect: jest.fn().mockResolvedValue()
    }));

    // Mock console.error
    console.error = jest.fn();

    // Call the POST function
    const result = await POST(req, res);

    // Assertions
    expect(result).toBeNull(); // Ensure null is returned
    expect(console.error).toHaveBeenCalledWith('Error writing to database:', expect.any(Error)); // Ensure error is logged
  });
});

// AI-GEN END (CHATGPT 3.5)