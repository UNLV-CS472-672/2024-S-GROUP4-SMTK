import { render, screen } from '@testing-library/react';
import FriendsList from './FriendsList';
import React from 'react';
import mockFetch from './mockFetch';
import fetch from 'node-fetch'

// Assign the test environment fetch to the global fetch
// This is necessary because the fetch API is not available in Node.js
global.fetch = fetch;


describe('FriendsList', () => {

  test('renders FriendsList component', () => {
    // Mock the API response with the users data
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch([]));

    render(<FriendsList />);
    
    // Assert that the component renders without throwing any errors
    expect(screen.getByTestId('friends-list')).toBeInTheDocument();
  });

  test('displays users', async () => {
      const users = [
          { username: 'user1', online: true },
          { username: 'user2', online: false },
          { username: 'user3', online: true },
      ];

      // Mock the API response with the users data
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch(users));

      render(<FriendsList />);
      

      // Wait for the users to be loaded
      await screen.findByText('user1');
      await screen.findByText('user2');
      await screen.findByText('user3');

      // Assert that the users are displayed in the component
      expect(screen.getByText('user1')).toBeInTheDocument();
      expect(screen.getByText('user2')).toBeInTheDocument();
      expect(screen.getByText('user3')).toBeInTheDocument();
  });

  test('selects user on click', async () => {
    const users = [
      { username: 'user1', online: true },
      { username: 'user2', online: false },
      { username: 'user3', online: true },
    ];

    // Mock the API response with the users data
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(users));

    const onSelectUser = jest.fn();

    render(<FriendsList onSelectUser={onSelectUser} selectedUser={{username: 'user1', online: true}} />);

    // Wait for the users to be loaded
    await screen.findByText('user1');
    await screen.findByText('user2');
    await screen.findByText('user3');

    // Simulate click on a user
    const user1Element = screen.getByText('user1');
    user1Element.click();

    // Assert that the onSelectUser function is called with the correct user
    expect(onSelectUser).toHaveBeenCalledWith(users[0]);

    expect(screen.getByTestId('selected-friend')).toBeInTheDocument();
  });
});