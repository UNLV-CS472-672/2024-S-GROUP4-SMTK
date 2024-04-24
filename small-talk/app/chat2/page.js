"use client"
import ThemeLayout from '../components/ThemeLayout';
import React from 'react';
import FriendsList from '../components/friends/FriendsList';
import Chatbox from '../../components/Chatbox';
import { useState } from 'react';
import '@/styles/custom.css';

export default function Chat(){
	const [selectedUser, setSelectedUser] = useState(null);

	return (
		<ThemeLayout>
			<div className="chat-container">
				<FriendsList onSelectUser={setSelectedUser} selectedUser={selectedUser}/>
				<Chatbox selectedFriend={selectedUser}/>
            </div>
		</ThemeLayout>
	);
}
