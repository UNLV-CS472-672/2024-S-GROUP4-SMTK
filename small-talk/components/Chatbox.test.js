import { render, screen, fireEvent } from '@testing-library/react';
import Chatbox from './Chatbox';
import React from 'react';
import { connect } from 'socket.io-client';

// mock @/util/socket
jest.mock('@/util/socket', () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
        off: jest.fn(),
        connect: jest.fn(),
    };
});

// mock setupChatRoom
jest.mock('@/util/chatUtils', () => {
    return {
        setupChatRoom: jest.fn(),
    };
});

describe('Chatbox', () => {
  test('renders chatbox component', () => {
    render(<Chatbox selectedFriend={null} userName="John" />);
    
    // Assert that the chat container is rendered
    const chatContainer = screen.getByTestId('chat-container');
    expect(chatContainer).toBeInTheDocument();
    
    // Assert that the chatbox title is rendered
    const chatboxTitle = screen.getByText('Private Chat');
    expect(chatboxTitle).toBeInTheDocument();
  });

  // Render with a selected friend
    test('renders chatbox component with selected friend', () => {
        render(<Chatbox selectedFriend={{ userName: 'Alice' }} userName="John" />);
        
        // Assert that the chat container is rendered
        const chatContainer = screen.getByTestId('chat-container');
        expect(chatContainer).toBeInTheDocument();
        
        // Assert that the chatbox title is rendered
        const chatboxTitle = screen.getByText('Private Chat');
        expect(chatboxTitle).toBeInTheDocument();
    });
});