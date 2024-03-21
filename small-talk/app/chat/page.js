"use client"
import Link from 'next/link'
import ThemeLayout from '../components/ThemeLayout';
import socket from "../../util/socket";
import React, { useEffect, useState } from 'react';

export default function Chat(){
	const [text, setText] = useState(null);
	const [user, setUser] = useState(null);
	  
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
			console.log("User connected:", connectedUser);
			this.users.push(user);
		});
		
		// handles connection error
		socket.on("connect_error", (err) => {
			if (err.message === "invalid username") {
				this.usernameAlreadySelected = false;
			}
		});
		
		// disconnect socket
		return () => {
			socket.off("users");
			socket.off("user connected");
			socket.off("connect_error");
		};
	}, [text]);
	
	// Since autoConnect was set to false, we would have to manually connect
	const onUsernameSelection = (username) => {
		socket.auth = { username };
        socket.connect();
    };

	// just added a button to check if connecting with backend
    const handleConnectButtonClick = () => {
        onUsernameSelection("randomusername");
    };

	return (
        <ThemeLayout>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Chatroom Page</h1>
                <button style={{ backgroundColor: 'pink' }} onClick={handleConnectButtonClick}>Connect</button>
            </div>
        </ThemeLayout>
	);
	
}
