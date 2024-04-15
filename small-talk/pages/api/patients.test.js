import handler from './patients';

// Tells Jest to replace the default export of '@/util/patientUtils' with a mock function
// It uses export, so __esModule is true
// getPatientsOnlineStatus is the default export of patientUtils so we define dfault as a jest.fn()
jest.mock('@/util/patientUtils', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('API Handler', () => {
    let req;
    let res;

    // Sets up a simple mocked API request. Lets the request method stay empty for now
    // The response object is built with mock functions that can be spied on to see how they are used
    // The status is called normally with a status code, and json is called with the data to be returned in the response
    beforeEach(() => {
        req = {
            method: '',
        };
        res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };
        
        // Imports the default jest.fn() function that was defined earlier in the mock at the top of the page
        mockedGetPatientsOnlineStatus = require('@/util/patientUtils').default;

        // Redefines the mocked function for the default export of patientUtils
        // Now instead of an empty jest.fn(), it is a jest.fn() that returns an array of two patients
        const getPatientsOnlineStatusMock = jest.fn(() => ['patient1', 'patient2']);
        mockedGetPatientsOnlineStatus.mockImplementation(getPatientsOnlineStatusMock);

    });

    afterEach(() => {
        mockedGetPatientsOnlineStatus.mockClear();
    });

    test('GET method should return patients online status', async () => {
        req.method = 'GET';
        
        await handler(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(['patient1', 'patient2']);
    });

    test('Non-GET method should return "Method not allowed" message', async () => {
        req.method = 'POST';

        await handler(req, res);

        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.json).toHaveBeenCalledWith({ message: 'Method not allowed' });
    });
});