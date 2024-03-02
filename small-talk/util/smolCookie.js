// get whatever is stored in a cookie
// such as session_id, location, user id
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const setCookie = (name, value, options) => {
    // if options parameter is null, set to empty object
    options = options || {};
    
    // verify expire
    let expires = options.expires;
    if (typeof expires === 'number' && expires) {
        const milliseconds = 1000;  
        const d = new Date();
        // cookie set to expire in n milliseconds
        d.setTime(d.getTime() + expires * milliseconds);
        expires = options.expires = d;
    }
  
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }
  
    
    value = encodeURIComponent(value);
  
    let updatedCookie = `${name}=${value}`;
  
    for (const propName in options) {
        updatedCookie += `; ${propName}`;
        const propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += `=${propValue}`;
        }
    }
  
    document.cookie = updatedCookie;
};

// setting the expiry time to -1 is 
// the most straightforward way to delete a cookie
const deleteCookie = (name) => {
    setCookie(name, '', {
      expires: -1
    });
  };