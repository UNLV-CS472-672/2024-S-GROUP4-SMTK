// ai-gen start (ChatGPT-4, 1)

import { render, screen } from '@testing-library/react';
import UserStatus from './UserStatus';
import React from 'react';

test('renders UserStatus component with online status', () => {
  const username = 'user1';
  const onlineStatus = true;

  render(<UserStatus username={username} onlineStatus={onlineStatus} />);

  // Assert that the component renders the username
  expect(screen.getByText(username)).toBeInTheDocument();

  // Assert that the component renders a green dot for online status
  const dotElement = screen.getByTestId('user-status-dot');
  expect(dotElement).toBeInTheDocument();
  expect(dotElement).toHaveClass('bg-green-500');
});

test('renders UserStatus component with offline status', () => {
  const username = 'user2';
  const onlineStatus = false;

  render(<UserStatus username={username} onlineStatus={onlineStatus} />);

  // Assert that the component renders the username
  expect(screen.getByText(username)).toBeInTheDocument();

  // Assert that the component renders a gray dot for offline status
  const dotElement = screen.getByTestId('user-status-dot');
  expect(dotElement).toBeInTheDocument();
  expect(dotElement).toHaveClass('bg-gray-400');
});

// ai-gen end