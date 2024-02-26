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
                <img src="/img/three-bar.png" alt="Tab"/>
                <img src="/img/logo.png" alt="Logo"/>
            </div>
            <div className="sidebar">
                {/* creating a game button, and direct to the game page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/game')} iconImage="/img/games-tab.png" altText="Games" />

                {/* creating a chat button, and direct to the chat page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/chat')} iconImage="/img/chat-tab.png" altText="Chat" />

                {/* creating a food button, and direct to the food page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/food')} iconImage="/img/food-tab.png" altText="Order Food" />

                {/* creating a movies button, and direct to the movies page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/movie')} iconImage="/img/media-tab.png" altText="Movies" />

                {/* creating a settings button, and direct to the settings page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/setting')}><span className="button-text">Settings</span></HoverButton>

                {/* creating a profile button, and direct to the profile page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/profile')}><span className="button-text">Profile</span></HoverButton>

                {/*creating a signout button, and direct to the login page with ButtonStyling for the button */}
                <HoverButton onClick={handleRedirect('/')}><span className="button-text">Sign Out</span></HoverButton>
            </div>
        </div>
    );
}
