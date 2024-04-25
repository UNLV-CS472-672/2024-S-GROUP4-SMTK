import { getSmallTalkClusterMongoUri, getConnectedMongoboi, disconnectMongoboi, getAllUsernamesInDB, getUserByQuery} from './mongoUtils';
import Mongoboi from '@/db/mongo';

jest.mock('@/db/mongo'); // This will mock the entire Mongoboi module

describe('getConnectedMongoboi', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Mongoboi.mockClear();
    });

    it('should create a new Mongoboi instance and call connect', () => {
        const uri = 'mongodb://localhost:27017';
        const dbName = 'testDB';

        getConnectedMongoboi(uri, dbName);

        expect(Mongoboi).toHaveBeenCalledTimes(1);
        expect(Mongoboi).toHaveBeenCalledWith(uri, dbName);

        const mockMongoboiInstance = Mongoboi.mock.instances[0];
        expect(mockMongoboiInstance.connect).toHaveBeenCalledTimes(1);
    });
});


describe('disconnectMongoboi', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Mongoboi.mockClear();
  });

  it('should disconnect the given mongoboi', () => {
      var myMongoboi = new Mongoboi('mongodb://localhost:27017', 'testDB');
      disconnectMongoboi(myMongoboi);

      const mockMongoboiInstance = Mongoboi.mock.instances[0];
      expect(mockMongoboiInstance.disconnect).toHaveBeenCalledTimes(1);
  });
});


  describe('getAllUsernamesInDB', () => {
    beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      Mongoboi.mockClear();
    });
  
    it('should send a basic query to getAllUsersByQuery, which should make a call go findAll', async () => {
      // Start by defining the environment variables
      process.env.DB_USER = 'testUser';
      process.env.DB_PASS = 'testPass';
      process.env.DB_URL = 'testURL';
      const expectedUri = 'mongodb+srv://testUser:testPass@testURL';

      // Set up the mocks
      const mockFindAll = jest.fn().mockResolvedValue([{username: 'testUser1'}, {username: 'testUser2'}]);
      jest.spyOn(Mongoboi.prototype, 'findAll').mockImplementation(mockFindAll);
      
      // Call the function and verify the results
      var usernames = await getAllUsernamesInDB('testDB', 'testCollection');
      
      expect(Mongoboi).toHaveBeenCalledTimes(1);
      expect(Mongoboi).toHaveBeenCalledWith(expectedUri, 'testDB');

      const mockMongoboiInstance = Mongoboi.mock.instances[0];
      expect(mockMongoboiInstance.connect).toHaveBeenCalledTimes(1);
      expect(mockMongoboiInstance.disconnect).toHaveBeenCalledTimes(1);
      expect(mockMongoboiInstance.findAll).toHaveBeenCalledTimes(1);

      expect(usernames).toEqual(['testUser1', 'testUser2']);
    });

    
    it('should return an empty array if no users are found', async () => {
      // Start by defining the environment variables
      process.env.DB_USER = 'testUser';
      process.env.DB_PASS = 'testPass';
      process.env.DB_URL = 'testURL';
      const expectedUri = 'mongodb+srv://testUser:testPass@testURL';

      // Set up the mocks
      const mockFindAll = jest.fn().mockResolvedValue(null);
      jest.spyOn(Mongoboi.prototype, 'findAll').mockImplementation(mockFindAll);
      
      // Call the function and verify the results
      var usernames = await getAllUsernamesInDB('testDB', 'testCollection');

      expect(usernames).toEqual([]);
    });
});

describe('getUserByQuery', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Mongoboi.mockClear();
  });

  it('should make a call to findOne', async () => {
      // Start by defining the environment variables
      process.env.DB_USER = 'testUser';
      process.env.DB_PASS = 'testPass';
      process.env.DB_URL = 'testURL';
      const expectedUri = 'mongodb+srv://testUser:testPass@testURL';

      const query = {
        session_id : 'testSessionId'
      }
  
      // Set up the mocks
      const mockFindOne = jest.fn().mockResolvedValue({username: 'testUser1'});
      jest.spyOn(Mongoboi.prototype, 'findOne').mockImplementation(mockFindOne);
      
      // Call the function and verify the results
      var user = await getUserByQuery('testDB', 'testCollection', query);
      
      expect(Mongoboi).toHaveBeenCalledTimes(1);
      expect(Mongoboi).toHaveBeenCalledWith(expectedUri, 'testDB');

      const mockMongoboiInstance = Mongoboi.mock.instances[0];
      expect(mockMongoboiInstance.connect).toHaveBeenCalledTimes(1);
      expect(mockMongoboiInstance.disconnect).toHaveBeenCalledTimes(1);
      expect(mockMongoboiInstance.findOne).toHaveBeenCalledTimes(1);

      expect(user.username).toEqual('testUser1');
  });
});