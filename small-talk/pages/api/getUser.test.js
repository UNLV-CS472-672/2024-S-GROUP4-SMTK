// ai-gen start (ChatGpt-4, 2)

import { POST } from './getUser';
import { getUserByQuery } from '@/util/mongoUtils';
import Mongoboi from '@/db/mongo';

// Tells Jest to replace the default export of '@/util/patientUtils' with a mock function
// It uses export, so __esModule is true
// getPatientsOnlineStatus is the default export of patientUtils so we define dfault as a jest.fn()
jest.mock("@/db/mongo"); // Mocking Mongoboi class
jest.mock('@/util/mongoUtils', () => ({
    __esModule: true,
    default: jest.fn(),
    getUserByQuery: jest.fn(),
}));

describe('POST', () => {
    let req;
    let res;
    let mockedGetUserByQuery = require('@/util/mongoUtils').getUserByQuery;

    beforeEach(() => {
        req = {
            method: 'POST',
            headers: {
                authorization: 'test'
            }
        };
        res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };
    });

    afterEach(() => {
        mockedGetUserByQuery.mockClear();
    });

    test('POST method with valid user return should return 200 status and result', async () => {
        let getUserByQueryMock = jest.fn(async () => {return ({username: 'patient'});});
        mockedGetUserByQuery.mockImplementation(getUserByQueryMock);
        
        await POST(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({username:'patient'});
    });
    test('POST method with null return should return 200 status and found: false', async () => {
        let getUserByQueryMock = jest.fn(async () => {return (null);});
        mockedGetUserByQuery.mockImplementation(getUserByQueryMock);
        
        await POST(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({found:false});
    });

    
});

//ai-gen end