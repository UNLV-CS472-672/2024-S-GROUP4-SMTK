"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import './styles.css';

const HoverButton = ({ onClick, iconImage, altText }) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverStyle = isHovered ? "button hover" : "button";

    return (
        <button
            className={hoverStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={iconImage} alt={altText} className="button-icon" />
        </button>
    );
};

const handleRedirect = (path) => () => {
    window.location.href = path;
}

export default function Homepage() {
    return (
        <div className="homePageContainer">
            {/* header for homepage */}
            <h1 className="header">Welcome to Homepage</h1>
            <div className = "topbar">
                <img src="/img/three-bar.png" alt="Tab" style={{ height: '65px', marginLeft: '25px', marginTop: '40px' }}/>
                <img src="/img/logo.png" alt="Logo" style={{ marginLeft: '45px', marginTop: '10px', marginBottom: '10px' }}/>
                <button onClick={handleRedirect('/')}>
                <img src="/img/logout-icon.png" alt="Notifications" style={{ height: '80px', marginTop: '45px', marginBottom: '10px', marginLeft: '1280px'}}/>
                </button>
                <button onClick={handleRedirect('/setting')}>
                    <img src="/img/notif-icon.png" alt="Notifications" style={{ height: '80px', marginTop: '45px', marginBottom: '10px', marginLeft: '10px'}}/>
                </button>
                <button onClick={handleRedirect('/profile')}>
                    <img src="/img/profile-temp.png" alt="Profile" style={{ height: '115px', marginTop: '10px', marginBottom: '10px', marginLeft: '20px' }}/>
                </button>
            </div>
            <div className="sidebar">
                {/* creating a health button, and direct to the health page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/health')} iconImage="/img/health-tab.png" altText="Health" />

                {/* creating a events button, and direct to the events page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/events')} iconImage="/img/event-tab.png" altText="Events" />

                {/* creating a chat button, and direct to the chat page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/chat')} iconImage="/img/chat-tab.png" altText="Chat" />

                {/* creating a chat button, and direct to the chat page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/friends')} iconImage="/img/friend-tab.png" altText="Friends" />

                {/* creating a movies button, and direct to the movies page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/movie')} iconImage="/img/media-tab.png" altText="Movies" />

                {/* creating a food button, and direct to the food page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/food')} iconImage="/img/food-tab.png" altText="Order Food" />

                {/* creating a game button, and direct to the game page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/game')} iconImage="/img/games-tab.png" altText="Games" />
            </div>
            <img src="/img/agenda.jpeg" altText="Agenda" style={{ height: '175px', width: '1000px', marginTop: '150px', marginLeft: '500px' }}/>
            <img src="/img/calendar.png" altText="Calendar" style={{ width: '1000px', height: '500px', marginTop: '30px', marginLeft: '500px' }}/>
        </div>
    );
}
