"use client"
import ThemeLayout from '../components/ThemeLayout';
import React from 'react';
import FriendsList from '../components/friends/FriendsList';
import Chatbox from '../components/Chatbox';
import '@/styles/custom.css';

export default function Chat(){
	return (
		<ThemeLayout>
			<div className="chat-container">
				<FriendsList />
				<Chatbox />
            </div>
		</ThemeLayout>
	);
}
