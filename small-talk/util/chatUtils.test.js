import { sendMessage, setupChatRoom } from './chatUtils';
// begin ai-gen (ChatGPT-4, 0)

describe('sendMessage', () => {
  it('should send a private message and update state when valid input is provided', () => {
    const inputMessage = 'Hello, how are you?';
    const selectedUser = { username: 'JohnDoe', userID: '123' };
    const setPrivateMessages = jest.fn();
    const setInputMessage = jest.fn();
    const room = 'chatRoom';
    const socket = { id: 'socketID', emit: jest.fn() };
    const consoleSpy = jest.spyOn(console, 'log');

    sendMessage(inputMessage, selectedUser, setPrivateMessages, setInputMessage, room, socket);

    expect(consoleSpy).toHaveBeenCalledWith('sent message from:JohnDoe with message: Hello, how are you?');
    expect(socket.emit).toHaveBeenCalledWith('private message', { content: 'Hello, how are you?', to: '123' });
    expect(setInputMessage).toHaveBeenCalledWith('');
    consoleSpy.mockRestore();
  });

  it('should log an error message when invalid input is provided', () => {
    const inputMessage = 123;
    const selectedUser = null;
    const setPrivateMessages = jest.fn();
    const setInputMessage = jest.fn();
    const room = 'chatRoom';
    const socket = { id: 'socketID', emit: jest.fn() };

    const consoleSpy = jest.spyOn(console, 'log');

    sendMessage(inputMessage, selectedUser, setPrivateMessages, setInputMessage, room, socket);

    expect(consoleSpy).toHaveBeenCalledWith('No user selected or empty message');
    expect(socket.emit).not.toHaveBeenCalled();
    expect(setPrivateMessages).not.toHaveBeenCalled();
    expect(setInputMessage).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

// Test setupChatRoom
describe('setupChatRoom', () => {
  it('should log the username when a valid string is provided', () => {
    const username = 'JohnDoe';
    const consoleSpy = jest.spyOn(console, 'log');

    setupChatRoom(username);

    expect(consoleSpy).toHaveBeenCalledWith('Setting up chat room with: ' + username);

    consoleSpy.mockRestore();
  });

  it('should log "Invalid username" when a non-string value is provided', () => {
    const username = 123;
    const consoleSpy = jest.spyOn(console, 'log');

    setupChatRoom(username);

    expect(consoleSpy).toHaveBeenCalledWith('Invalid username');

    consoleSpy.mockRestore();
  });
});