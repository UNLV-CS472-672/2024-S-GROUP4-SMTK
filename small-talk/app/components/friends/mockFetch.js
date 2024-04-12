// Mock fetch function to return a promise with the data passed in as an argument

export default function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      }),
    );
  }