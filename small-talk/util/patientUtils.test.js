// ai-gen start (ChatGPT-4, 1)


import { getPatientsOnlineStatus } from './patientUtils';
import * as mongoUtils from './mongoUtils';

jest.mock('./mongoUtils', () => ({
  getAllUsernamesInDB: jest.fn(),
}));

describe('getPatientsOnlineStatus', () => {
  it('should return a list of users with their online status', async () => {
    const expected = [
      { username: 'John Doe', online: true },
      { username: 'Jane Smith', online: true },
      { username: 'Bob Johnson', online: true }
    ];
    const patients = ['John Doe', 'Jane Smith', 'Bob Johnson'];
    mongoUtils.getAllUsernamesInDB.mockResolvedValue(patients);

    const result = await getPatientsOnlineStatus();
    expect(result).toEqual(expected);
  });

  it('should return a list of users with their online status if patients are passed into the call', async () => {
    const expected = [
      { username: 'John Doe', online: true },
      { username: 'Jane Smith', online: true },
      { username: 'Bob Johnson', online: true }
    ];
    const patients = ['John Doe', 'Jane Smith', 'Bob Johnson'];

    const result = await getPatientsOnlineStatus(patients);
    expect(result).toEqual(expected);
  });

  it('should exclude the current patient from the online status list', async () => {
    // Since hello is the default patient. Will need to be changed once the patient logic is in!
    const patients = ['John Doe', 'Jane Smith', 'Bob Johnson', 'hello'];
    mongoUtils.getAllUsernamesInDB.mockResolvedValue(patients);

    const expected = [
      { username: 'John Doe', online: true },
      { username: 'Jane Smith', online: true },
      { username: 'Bob Johnson', online: true }
    ];

    const result = await getPatientsOnlineStatus();
    expect(result).toEqual(expected);
  });

});

// ai-gen end