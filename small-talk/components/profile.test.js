import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Profile from './profile.js';


jest.mock('./profileIcon.js', () => () => <div data-testid="profile-icon" />);
jest.mock('./profileDrop.js', () => ({ isVisible }) => isVisible ? <div data-testid="profile-dropdown">Dropdown Content</div> : null);

describe('Profile component', () => {
  it('toggles dropdown visibility when button is clicked', () => {
    const { getByTestId } = render(<Profile />);
    const button = getByTestId('profile-icon'); 
    fireEvent.click(button);
    const dropdown = getByTestId('profile-dropdown');
    expect(dropdown).toBeInTheDocument();
  });
//ai gen start
  it('hides dropdown when button is clicked again', () => {
    const { getByTestId, queryByTestId } = render(<Profile />);
    const button = getByTestId('profile-icon'); // Assuming the icon has a test ID of 'profile-icon'
    
    fireEvent.click(button);
    fireEvent.click(button);
    
    const dropdown = queryByTestId('profile-dropdown');
    expect(dropdown).toBeNull();
  });
});
//ai gen end