const Mongoboi = require("../../db/mongo.js");
//Mongoboi.connect();
const { createCookieHash } =  require("../../util/smolCwypto.js");
const POST = require("../../pages/api/login.js");


describe('POST function', () => {
  it('should return 200 and an empty object when req.body is null', async () => {
    // Mock the findOne function to return null
    Mongoboi.prototype.findOne = jest.fn().mockResolvedValue(null);

    const req = {
      body: null
    };
    const res = {
      status: jest.fn().mockReturnThis(), // This makes it chainable
      json: jest.fn()
    };

    await POST(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  });

  it('should return 200 and a hash when the user exists', async () => {
    // Mock the findOne function to return a user
    Mongoboi.prototype.findOne = jest.fn().mockResolvedValue({ username: 'user123', password: 'testPassword' });

    const req = {
      body: JSON.stringify({ username: 'user123', password: 'testPassword' }),

    };
    const res = {
      status: jest.fn().mockReturnThis(), // This makes it chainable
      json: jest.fn()
    };

    await POST(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ hash: expect.any(String) }));
  });

  it('should return 401 when the user does not exist', async () => {
    // Mock the findOne function to return null
    Mongoboi.prototype.findOne = jest.fn().mockResolvedValue(null);

    const req = {
      body: JSON.stringify({ username: 'user123', password: 'testPassword' })
    };
    const res = {
      status: jest.fn().mockReturnThis(), // This makes it chainable
      json: jest.fn()
    };

    await POST(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Empty" });
  });
});