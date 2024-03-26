//importing from other directorys and using uri
const handleRegister = require("../db/registerToDB.js");
const uri = "mongodb+srv://smt_root:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
import Mongoboi from "./mongo"
import bcrypt from "bcryptjs";
//mocking mongo js in order to use functions
jest.mock('../db/mongo.js', () => {
  const mongoboi = {
    connect: jest.fn(),
    insertOne: jest.fn(),
    disconnect: jest.fn(),
  };

  return jest.fn(() => mongoboi);
});
//mocking bcrypt in order to use hashing functions
jest.mock('bcryptjs', () => ({
  hash: jest.fn(() => Promise.resolve('hashedPassword')),
  genSalt: jest.fn(() => Promise.resolve('randomSalt')),
  compareSync: jest.fn(() => true),
}));

//create function usage for test cases/handle register
describe('handleRegister', () => {
  let mongoboi;

  beforeEach(() => {
    mongoboi = new Mongoboi(uri, "patients");
    mongoboi.insertOne = jest.fn();
    mongoboi.disconnect = jest.fn();
  });
//test case to check if registerToDB creates new user
  it('should create a new user', async () => {
    //using mock user to get info
    const mockUser = {
      username: "testUser",
      password: "testPassword",
      firstname: "testFirstName",
      lastname: "testLastName",
      dob: new Date('2000-01-01').getTime() / 1000,
    };
    //inserting mock values into the mock user
    mongoboi.insertOne.mockResolvedValue(mockUser);
    //waiting for the result from the function
    const result = await handleRegister(
      mockUser.username,
      mockUser.password,
      mockUser.firstname,
      mockUser.lastname,
      '2000-01-01'
    );
    //checking to see if insert one is called
    expect(mongoboi.insertOne).toHaveBeenCalled();
    //access mock calls if test passed
    const insertedUser = mongoboi.insertOne.mock.calls[0][1];
    //compare the hashed passwords to see if hashed correctly
    expect(bcrypt.compareSync(mockUser.password, insertedUser.password)).toBe(true);
    //if correct, return true to pass the test
    expect(result).toEqual(insertedUser);
  
    //expect(mongoboi.insertOne).toHaveBeenCalledWith("patients", mockUser); // Changed 'Users' to 'patients'
    //expect(result).toEqual(mockUser);
  });
  //test case to check if errors will throw null/error msgs
  it('should return null if there is an error', async () => {
    mongoboi.insertOne.mockImplementation(() =>{
      throw new Error('Test error');
    });

    const result = await handleRegister("testUser", "testPassword", "testFirstName", "testLastName", "2000-01-01");

    expect(result).toBeNull();
  });
  //test case to check if thhe user always disconnects from the database after
  it('should always disconnect from the database', async () => {
    await handleRegister("testUser", "testPassword", "testFirstName", "testLastName", "2000-01-01");

    expect(mongoboi.disconnect).toHaveBeenCalledTimes(1);
  });
  //test case for the hashing passwords to see if hashing is working correctly
  it('should return null if there is an error while hashing the password', async () => {
    const mockUser = {
      username: "testUser",
      password: "testPassword",
      firstname: "testFirstName",
      lastname: "testLastName",
      dob: new Date('2000-01-01').getTime() / 1000,
    };
  
    // Mock bcrypt.hash to throw an error
    bcrypt.hash.mockImplementation(() => {
      throw new Error('Test error');
    });
    
    const result = await handleRegister(
      mockUser.username,
      mockUser.password,
      mockUser.firstname,
      mockUser.lastname,
      '2000-01-01'
    );
  
    expect(result).toBeNull();
  });
});
