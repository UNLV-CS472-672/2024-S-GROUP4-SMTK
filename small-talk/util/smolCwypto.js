const crypto = require('crypto');

// Function to create a secure cookie hash
const createCookieHash = (data, secretKey) => {
  // Encode the data
  const encodedData = Buffer.from(JSON.stringify(data), 'utf-8');

  // Create a hash using SHA-256 algorithm and secret key
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(encodedData);
  const hash = hmac.digest('hex');

  return hash;
};

export { createCookieHash }//