import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Chat from '../chat/page.js';
import socket from '../../util/socket';
import { sendMessage } from '../chat/page.js';

jest.mock('../components/friends/FriendsList', () => {
    return function MockedFriendsList() {
        return <div className="friends-list" data-testid='friends-list' />;
    }
});

// Mock socket.io module
jest.mock('../../util/socket', () => ({
    auth: null,
    connect: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
    id: 'mockedSocketID'
}));


// create all the test cases for what is currently up in the page.js, can add more for future functionality 
describe('Chat Component', () => {
    // once each test case is done, clear it so the next test case is run off a fresh implementation
    afterEach(() => {
        jest.clearAllMocks();
    });

    // check that the chat page loads without crashing or taking too long
    it('renders without crashing', () => {
        render(<Chat />);
    });

    // simulate the button being clicked in order to connect to the socket
    it('connects to socket on button click', async () => {
        // render chat
        const { getByText } = render(<Chat />);
        // by using text, find the Connect button
        const connectButton = getByText('Connect');
        // using fireEvent, simulate a push of a button
        fireEvent.click(connectButton);
        await waitFor(() => {
            expect(socket.connect).toHaveBeenCalled();
        });
    });

    //last test checks that the socket is listening and updating the different states correctly. 
    it('listens for socket events and updates state accordingly, and disconnect', async () => {
        // create a mock with 2 users
        const mockUsers = [
            { userID: '1', username: 'user1' },
            { userID: '2', username: 'user2' }
        ];
    
        // render the chat
        const { container } = render(<Chat />);
        // following code will simulate the different events we have so far.
    
        // mock socket events
        const socketOnMock = jest.spyOn(socket, 'on');
    
        // simulate "users" event
        const usersEventHandler = socketOnMock.mock.calls.find(call => call[0] === 'users')[1];
        usersEventHandler(mockUsers);
    
        // get the user state from the chat
        const usersElement = await waitFor(() => container.querySelector('.user-list'));
        const usersTextContent = usersElement.textContent;
        // check if the state is correctly updated
        // so when button is clicked there should be a text on the screen where it says the users name, look for it
        expect(usersTextContent).toContain('user1');
        expect(usersTextContent).toContain('user2');
    
        // simulate "user connected" event
        const connectedUser = { userID: '3', username: 'newUser' };
        const userConnectedEventHandler = socketOnMock.mock.calls.find(call => call[0] === 'user connected')[1];
        userConnectedEventHandler(connectedUser);
    
        // get the updated user state from the chat
        const updatedUsersElement = await waitFor(() => container.querySelector('.user-list'));
        const updatedUsersTextContent = updatedUsersElement.textContent;
    
        // check if the connected user is added to the list of users 
        expect(updatedUsersTextContent).toContain('newUser');

        // testing disconnect
        const disconnectEventHandler = socketOnMock.mock.calls.find(call => call[0] === 'disconnect')[1];
        disconnectEventHandler();
        
        // Get the updated user state from the chat
        const disconnectUsersElement = await waitFor(() => container.querySelector('.user-list'));
        const disconnectUsersTextContent = disconnectUsersElement.textContent;
        // Check if user disconnected
        expect(disconnectUsersTextContent).toContain('user1user2newUser');
    });
    
    it('listens for private messages and updates state accordingly', async () => {
        // render the chat
        const { container } = render(<Chat />);

        // mock socket events
        const socketOnMock = jest.spyOn(socket, 'on');

        // Sets the private message
        const message = { content: 'Hello', from: 'senderID' };
        const privateMessageEventHandler = socketOnMock.mock.calls.find(call => call[0] === 'private message')[1];
        privateMessageEventHandler(message);
    
        // Get the updated private messages state
        const updatedPrivateMessages = await waitFor(() => container.querySelector('.private-messages-list')); 
    
        // Check if the state is correctly updated
        expect(updatedPrivateMessages.textContent).toContain('Hello');
    });
});


describe('sendMessage', () => {
    let socket;
    let setPrivateMessages;
    let setInputMessage;
    let inputMessage;
    let selectedUser;

    beforeEach(() => {
        // Mock socket object with emit method
        socket = { emit: jest.fn(), id: '123' };

        // Mock setPrivateMessages and setInputMessage functions
        setPrivateMessages = jest.fn();
        setInputMessage = jest.fn();
    });

    it('should not send a message if no user is selected', () => {
        inputMessage = 'Hello';
        selectedUser = null;
        // to test the message should not be send if theres no user selected
        sendMessage(inputMessage, selectedUser, socket, setPrivateMessages, setInputMessage);
        expect(socket.emit).not.toHaveBeenCalled();
        expect(setPrivateMessages).not.toHaveBeenCalled();
        expect(setInputMessage).not.toHaveBeenCalled();
    });

    it('should not send a message if the input message is empty', () => {
        inputMessage = '';
        selectedUser = { username: 'John', userID: '456' };
        // if the input message is empty, the message wont be send
        sendMessage(inputMessage, selectedUser, socket, setPrivateMessages, setInputMessage);
        expect(socket.emit).not.toHaveBeenCalled();
        expect(setPrivateMessages).not.toHaveBeenCalled();
        expect(setInputMessage).not.toHaveBeenCalled();
    });

    it('should send a message if a user is selected and the input message is not empty', async() => {
        inputMessage = 'Hello';
        selectedUser = { username: 'John', userID: '456' };
        // send successful message since both input message and user is selected
        sendMessage(inputMessage, selectedUser, socket, setPrivateMessages, setInputMessage);
        expect(socket.emit).toHaveBeenCalledWith('private message', { content: inputMessage, to: selectedUser.userID });
        expect(setPrivateMessages).toHaveBeenCalledWith(expect.any(Function));
        expect(setInputMessage).toHaveBeenCalledWith('');
    });

    it('calls setInputMessage with the correct value on input change', () => {
        // Render the component
        const { getByPlaceholderText } = render(<Chat />);
        
        // The chat box to input message
        const inputField = getByPlaceholderText('Type your message here...');
        fireEvent.change(inputField, { target: { value: 'Hello, World!' } });
        
        // Check if setInputMessage is called with the correct value
        expect(inputField.value).toBe('Hello, World!');
    });

    it('calls sendMessage function with correct parameters when called', () => {
        // Render the component
        const { getByText } = render(<Chat />);
        
        // check if send button works
        fireEvent.click(getByText('Send'));
    });
});