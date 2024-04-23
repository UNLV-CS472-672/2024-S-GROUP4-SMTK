import socket from "@/util/socket";
import React, { useEffect, useState } from 'react';
import { sendMessage, setupChatRoom } from '@/util/chatUtils';

const Chatbox = ({selectedFriend}) => { 
    const [user, setUser] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [privateMessages, setPrivateMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");

    // Define a useEffect hook that runs when a new user is selected
    useEffect(() => {
        // If a user is selected, set the room to the selected user's username
        // There will likely be a lot more functionality that needs to be added or changed
        // depending on how the chat system is implemented
        console.log("Selected friend: ", selectedFriend)
        if (selectedFriend) {
            setupChatRoom(selectedFriend.username);
        }
    }, [selectedFriend]);

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
			if (room === selectedFriend.username) {
                setPrivateMessages(prevMessages => [...prevMessages, { content, from }]);
                console.log("private message:", privateMessages);
            }
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
        if (typeof inputMessage === 'string' && inputMessage.trim() !== "" && selectedUser && typeof setPrivateMessages === 'function' && typeof setInputMessage === 'function') {
            const censorMessage = censor(inputMessage);
            
            console.log("sent message from:" + selectedUser.username + " with message: " + censorMessage);
            socket.emit("private message", { content: censorMessage, to: selectedUser.userID});
            setPrivateMessages(prevMessages => [...prevMessages, { content: censorMessage, from: socket.id }]);
            setInputMessage("");
            //handleMessageSave(censorMessage);
        } else {
            console.log("No user selected or empty message");
        }
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
                backgroundColor: '#d3dae4',
                color: 'black',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '80%',
                marginLeft: '10vh', // Reduced the vertical margin from 20vh to 10vh
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
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-150" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chatbox;