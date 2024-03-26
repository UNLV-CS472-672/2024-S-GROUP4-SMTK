import React from 'react';
import auth from './page'; // Assuming page.js is in the same directory

describe('auth function', () => {
  it('renders a div', () => {
    const wrapper = auth();
    expect(wrapper.type).toBe('div');
  });
});
