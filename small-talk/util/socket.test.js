import { io } from "socket.io-client";
import socket from '../util/socket.js'; 

// mock the socket connection
jest.mock('socket.io-client', () => {
    const onAnyMock = jest.fn();
    const connectMock = jest.fn();
    const socketInstance = {
        onAny: onAnyMock,
        connect: connectMock,
    };
    
    return {
        io: jest.fn().mockReturnValue(socketInstance)
    };
});

describe('Socket connection', () => {
    it('should initialize the socket with correct URL', () => {
        // Check the correct url is called
        expect(io).toHaveBeenCalledWith("http://localhost:8000", { autoConnect: false });
        
        // Checks the listeners 
        expect(socket.onAny).toHaveBeenCalled();

        // Create a spy on console.log
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        // Check if the 'onAny' method is functioning properly
        const eventName = 'test_event';
        const eventData = { message: 'test_message' };

        socket.onAny.mock.calls[0][0](eventName, eventData);

        // Verify that console.log was called with the expected parameters
        expect(consoleLogSpy).toHaveBeenCalled();
        expect(consoleLogSpy.mock.calls[0][0]).toBe(eventName);
        expect(consoleLogSpy.mock.calls[0][1]).toEqual(expect.arrayContaining([eventData]));
    });
});