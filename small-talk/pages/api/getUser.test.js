import { POST } from './getUser';
import Mongoboi from 'mongoboi';

jest.mock('mongoboi', () => {
  return jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
    findOne: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe('POST', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      headers: {
        authorization: 'test-session-id',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the user if found in the database', async () => {
    const mockResult = { username: 'John Doe', age: 25 };
    Mongoboi.prototype.findOne.mockResolvedValue(mockResult);

    await POST(req, res);

    expect(Mongoboi).toHaveBeenCalledWith(
      'mongodb+srv://vercel-admin-user:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority',
      'Users'
    );
    expect(Mongoboi.prototype.connect).toHaveBeenCalled();
    expect(Mongoboi.prototype.findOne).toHaveBeenCalledWith('patients', {
      session_id: 'test-session-id',
    });
    expect(Mongoboi.prototype.disconnect).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });

  it('should return null if user is not found in the database', async () => {
    Mongoboi.prototype.findOne.mockResolvedValue(null);

    await POST(req, res);

    expect(Mongoboi).toHaveBeenCalledWith(
      'mongodb+srv://vercel-admin-user:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority',
      'Users'
    );
    expect(Mongoboi.prototype.connect).toHaveBeenCalled();
    expect(Mongoboi.prototype.findOne).toHaveBeenCalledWith('patients', {
      session_id: 'test-session-id',
    });
    expect(Mongoboi.prototype.disconnect).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(null);
  });

  it('should return an error if there is an exception during database operation', async () => {
    Mongoboi.prototype.findOne.mockRejectedValue(new Error('Database error'));

    await POST(req, res);

    expect(Mongoboi).toHaveBeenCalledWith(
      'mongodb+srv://vercel-admin-user:pokemonwithguns@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority',
      'Users'
    );
    expect(Mongoboi.prototype.connect).toHaveBeenCalled();
    expect(Mongoboi.prototype.findOne).toHaveBeenCalledWith('patients', {
      session_id: 'test-session-id',
    });
    expect(Mongoboi.prototype.disconnect).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ found: false });
  });
});