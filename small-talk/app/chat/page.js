"use client"
import Link from 'next/link'
import ThemeLayout from '../components/ThemeLayout';
import socket from "../../util/socket";
import React, { useEffect, useState } from 'react';

export default function Chat(){
	const [text, setText] = useState(null);
	const [user, setUser] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [privateMessages, setPrivateMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");

	useEffect(() => {
		socket.auth = "random";
    	socket.connect();
		setText("whatever");

		// getting all currently connected users
		socket.on("users", (receivedUsers) => {
            console.log("Received users:", receivedUsers);
            receivedUsers.forEach((user) => {
                user.self = user.userID === socket.id;
            });
            setUser(receivedUsers);
        });

		// set the event to connected users
		socket.on("user connected", (user) => {
			console.log("User connected:", user);
			setUser(prevUsers => [...prevUsers, user]);
		});

		// deals with new messages from the recipient
		socket.on("private message", ({ content, from }) => {
			console.log("got the private message yay: ", { content, from });
			
			setPrivateMessages(privateMessages => [...privateMessages, { content, from }]);
		});

		// Commented out because an aspect is missing and will be added in a future PR
		// handles connection error
		// socket.on("connect_error", (err) => {
		// 	if (err.message === "invalid username") {
		// 		this.usernameAlreadySelected = false;
		// 	}
		// });
		
		// will disconnect the socket
		socket.on("disconnect", () => {
			console.log("User disconnected:");

			setUser(prevUsers => {
				return prevUsers.map(user => {
					// if (user.self) {
					// 	return{...user, connecteded: false};
					// }
					return user;
				});
			});
		});
        
		// disconnect sockets
		return () => {
			socket.off("users");
			socket.off("user connected");
			//socket.off("connect_error");
			socket.off("private message");
			socket.off("disconnect");
		};
	}, [text]);

	// Since autoConnect was set to false, we would have to manually connect
	const onUsernameSelection = (username) => {
		socket.auth = { username };
        socket.connect();
    };

	// // just added a button to check if connecting with backend
    const handleConnectButtonClick = () => {
        onUsernameSelection("randomusername");
    };

	const handleSendMessage = () => {
        sendMessage(inputMessage, selectedUser, socket, setPrivateMessages, setInputMessage);
    };

	return (
        <ThemeLayout>
            <div // all the styles added in this file are temporary for testing purposes
				data-testid="chat-container" 
				style={{ 
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center', // Align items to the center horizontally
					backgroundColor: 'pink',
					color: 'black',
					padding: '20px',
					borderRadius: '10px',
					maxWidth: '80%', // Limit the maximum width of the container
					margin: '20vh auto 0', // Move the container down by 20% of viewport height
					height: '70vh', // Set the height to 70% of the viewport height
					maxHeight: '600px', // Limit the maximum height to 600px
					overflow: 'hidden', // Hide overflow to prevent scrollbars on the container itself
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
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

				<h3 style = {{ color:'blue' }}>Users:</h3>
				<ul className="user-list" style={{ color: 'purple', padding: 0, margin: 0, maxHeight: '120px', overflowY: 'auto' }}>
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
					style={{ width: '100%', marginBottom: '10px' }} // Set the width to 100% and add some bottom margin
				/>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={handleConnectButtonClick}>Connect</button>
					<button style={{ backgroundColor: 'green', marginRight: '10px' }} onClick={handleSendMessage}>Send</button>
				</div>

            </div>

        </ThemeLayout>
	);
}

export const sendMessage = (inputMessage, selectedUser, socket, setPrivateMessages, setInputMessage) => {
    if (typeof inputMessage === 'string' && inputMessage.trim() !== "" && selectedUser) {
        console.log("send message:", selectedUser.username);
        socket.emit("private message", { content: inputMessage, to: selectedUser.userID});
        setPrivateMessages(prevMessages => [...prevMessages, { content: inputMessage, from: socket.id }]);
        setInputMessage("");
    } else {
        console.log("No user selected or empty message");
    }
};


module.export = Chat;