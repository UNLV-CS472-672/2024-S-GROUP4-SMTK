import Mongoboi from "@/db/mongo"
//import { Request, NextResponse } from "next";
//import { headers } from "next"

import POST from "../../pages/api/auth2.js";

jest.mock("@/db/mongo"); // Mocking Mongoboi class

describe("POST function", () => {
  let req, res;
  let mongoboi;
  let responseBody;

  beforeEach(() => {
      // Reset request and response objects before each test
      req = { headers: {} };
      responseBody = "null";
      res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn((body) => { responseBody = body; }),
      };

      // Mock mongoboi
      mongoboi = {
          connect: jest.fn(),
          findOne: jest.fn(),
          disconnect: jest.fn(),
      };

      Mongoboi.mockImplementation(() => mongoboi);
  });

  it("should return found: false when no authorization header is provided", async () => {
      await POST(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(responseBody).toEqual({ found: false });
  });

  it("should return found: false when there is an error in database operation", async () => {
      req.headers.authorization = "test";
      mongoboi.findOne.mockImplementationOnce(() => {
          throw new Error();
      });
      await POST(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(responseBody).toEqual({ found: false });
  });

  it("should return found: true when a matching session ID is found", async () => {
      req.headers.authorization = "valid_session_id";
      mongoboi.findOne.mockResolvedValueOnce({});

      await POST(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(responseBody).toEqual({ found: true });
  });

  it("should return found: false when no matching session ID is found", async () => {
      req.headers.authorization = "invalid_session_id";
      mongoboi.findOne.mockResolvedValueOnce(null);

      await POST(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(responseBody).toEqual({ found: false });
  });
});

  