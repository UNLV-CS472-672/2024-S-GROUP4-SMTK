import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar Component', () => {
  let originalLocation;
  
  beforeAll(() => {
    originalLocation = window.location;
    delete window.location;
    window.location = { href: '', assign: jest.fn() };
  });
  
  afterAll(() => {
    window.location = originalLocation;
  });

  it('redirects to the correct path when the homepage button is clicked', () => {
    render(<TopBar />);
    const homeButton = screen.getByAltText('Logo');
    fireEvent.click(homeButton);
    expect(window.location.href).toBe('/homepage');
  });

  it('toggles dropdown visibility on profile button click', () => {
    render(<TopBar />);
    // Assuming the profile button toggles the dropdown and has alt text "Profile"
    const profileButton = screen.getByAltText('Profile');
    // Initially, the dropdown should not be visible
    expect(screen.queryByText('Profile')).toBeNull(); // Adjust if your dropdown has different text or identifiers
    fireEvent.click(profileButton);
    // After clicking, check if the dropdown is now visible
    // This assumes that clicking the profile button renders elements that can be checked for
    // Adjust the query to match an element that appears in the dropdown
    expect(screen.queryByText('Profile')).toBeInTheDocument();
    // Optionally, click again and check if the dropdown is hidden
    fireEvent.click(profileButton);
    expect(screen.queryByText('Profile')).toBeNull();
  });

  // Other tests...
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore mocks to their original state
});
