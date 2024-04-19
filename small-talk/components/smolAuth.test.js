import { smolAuth } from '../components/smolAuth.js'; 
import { getCookie } from "@/util/smolCookie";

jest.mock('@/util/smolCookie', () => ({
  getCookie: jest.fn(),
}));
// Mock fetch to return null JSON data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(null),
  })
);

describe('smolAuth', () => {
  // Define mock for getServerSideProps function
  const mockGetServerSideProps = jest.fn();
  const redirect = jest.fn();

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  // Test case: should call getServerSideProps if there is no session ID
  it('should call getServerSideProps if there is no session ID', async () => {
    // Define the context without session ID
    const ctx = { req: { headers: {} } };

    // Call smolAuth function with the mocked context
    await smolAuth(mockGetServerSideProps)(ctx);

    // Assert that getServerSideProps is called with the provided context
    expect(redirect);
  });

  // Test case: should redirect to login page if session ID is invalid
  it('should redirect to login page if session ID is invalid', async () => {
    // Define the invalid session ID
    const session_id = 'invalid_session_id';

    // Define the context with the invalid session ID
    const ctx = { req: { headers: { cookie: `session_id=${session_id}` } } };

    // Mock the return value of getCookie function
    getCookie.mockReturnValue(session_id);

    // Call smolAuth function with the mocked context
    const result = await smolAuth(mockGetServerSideProps)(ctx);

    // Assert redirection to the login page
    expect(result).toEqual({
      redirect: {
        permanent: false,
        destination: '/login',
      },
    });
  });

  it('should redirect to login page if session is not found', async () => {
    const session_id = 'valid_session_id';
    const ctx = { req: { headers: { cookie: `session_id=${session_id}` } } };
    getCookie.mockReturnValue(session_id);
    // Mocking the fetch call to return a response indicating session not found
    global.fetch = jest.fn().mockResolvedValue({ json: () => ({ found: false }) });

    const result = await smolAuth(mockGetServerSideProps)(ctx);

    expect(result).toEqual({
      redirect: {
        permanent: false,
        destination: '/login',
      },
    });
  });

  it('should call getServerSideProps if session is valid and found', async () => {
    const session_id = 'valid_session_id';
    const ctx = { req: { headers: { cookie: `session_id=${session_id}` } } };
    getCookie.mockReturnValue(session_id);
    // Mocking the fetch call to return a response indicating session found
    global.fetch = jest.fn().mockResolvedValue({ json: () => ({ found: true }) });

    await smolAuth(mockGetServerSideProps)(ctx);

    expect(mockGetServerSideProps).toHaveBeenCalledWith(ctx);
  });

  it('should redirect to login page if fetch call fails', async () => {
    const session_id = 'valid_session_id';
    const ctx = { req: { headers: { cookie: `session_id=${session_id}` } } };
    getCookie.mockReturnValue(session_id);
    // Mocking the fetch call to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    const result = await smolAuth(mockGetServerSideProps)(ctx);

    expect(result).toEqual({
      redirect: {
        permanent: false,
        destination: '/login',
      },
    });
  });

  it('redirects to /login when json is null', async () => {
    // Mock request headers with a cookie
    const ctx = {
      req: {
        headers: {
          cookie: 'session_id=example_session_id',
          host: 'example.com',
        }
      }
    };

    // Mock the getServerSidePropsFunc
    const getServerSidePropsFunc = jest.fn();

    // Call the smolAuth function
    const result = await smolAuth(getServerSidePropsFunc)(ctx);

    // Assert redirection to /login
    expect(result).toEqual({
      redirect: {
        permanent: false,
        destination: '/login',
      },
    });

    // Ensure getServerSidePropsFunc is not called
    expect(getServerSidePropsFunc).not.toHaveBeenCalled();
  });

  it('should redirect to login page if session is not found', async () => {
    const session_id = 'valid_session_id';
    const ctx = { req: { headers: { cookie: `session_id=${session_id}` } } };
    getCookie.mockReturnValue(session_id);
    
    // Mocking the fetch call to return a response indicating session not found
    global.fetch = jest.fn().mockResolvedValue({ json: () => ({ found: false }) });
  
    const result = await smolAuth(mockGetServerSideProps)(ctx);
  
    // Assert that the result redirects to the login page
    expect(result).toEqual({
      redirect: {
        permanent: false,
        destination: '/login',
      },
    });
  });
});
