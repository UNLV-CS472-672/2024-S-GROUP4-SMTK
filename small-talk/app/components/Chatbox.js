import socket from "../../util/socket";
import React, { useEffect, useState } from 'react';
import { sendMessage } from '../../util/chatUtils';
import '@/styles/custom.css';

const Chatbox = () => { 
    const [user, setUser] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [privateMessages, setPrivateMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");
	const [room, setRoom] = useState(""); 

	useEffect(() => {
		handleConnectButtonClick();
		socket.on("users", (receivedUsers) => {
			receivedUsers.forEach((user) => {
				user.self = user.userID === socket.id;
			});
			setUser(receivedUsers);
		});
	
		socket.on("user connected", (user) => {
			setUser(prevUsers => [...prevUsers, user]);
		});
	
		socket.on("private message", ({ content, from, room }) => {
			setPrivateMessages(prevMessages => [...prevMessages, { content, from }]);
			console.log("private message:", privateMessages);
		});
	
		socket.on("disconnect", () => {
			console.log("User disconnected:");
			setUser(prevUsers => prevUsers.filter(user => user.userID !== socket.id));
		});
		
		return () => {
			socket.off("users");
			socket.off("user connected");
			socket.off("private message");
			socket.off("disconnect");
		};
	}, [privateMessages]); 

	const handleConnectButtonClick = () => {
		// replace this with the proper usename taken from the cookie 
		onUsernameSelection("randomusername");
	};

	const handleSendMessage = () => {
        	sendMessage(inputMessage, selectedUser, setPrivateMessages, setInputMessage, 'dummy-room', socket);
    	};

	const onUsernameSelection = (username) => {
		socket.auth = { username };
		socket.connect();
	};

    return (
        <div
            data-testid="chat-container" 
            className='chatbox'
            style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'pink',
                color: 'black',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '80%',
                margin: '10vh auto 0', // Reduced the vertical margin from 20vh to 10vh
                height: '70vh',
                maxHeight: '600px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}>
            <h2>Private Chat</h2>
            <div
                className="private-messages-list"
                style={{
                    height: 'calc(100% - 220px)', // Set the height of the message container dynamically
                    width: '100%',
                    overflowY: 'auto', // Allow vertical scrolling if content overflows
                }}>

                {privateMessages.map((message, index) => (
                    <div key={index}>
                    <strong>{message.from === socket.id ? "You" : "Recipient"}:</strong> {message.content}
                    </div>
                ))}
            </div>

            <h3>Users Online:</h3>
            <ul
                className="user-list"
                style={{ color: 'purple', padding: 0, margin: 0, maxHeight: '120px', overflowY: 'auto' }}>
                {user.map(user => (
                    <li key={user.userID} onClick={() => setSelectedUser(user)}>
                        {user.username}
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={handleConnectButtonClick}>Connect</button> */}
                <button style={{ backgroundColor: 'green', marginRight: '10px' }} onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chatbox;