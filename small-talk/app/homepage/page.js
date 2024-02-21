"use client"
import Link from 'next/link'
import React, { useState } from 'react';


// Styling functions
const HomePageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align buttons to the left side
    justifyContent: 'flex-start', // Align content to the top
    height: '100vh',
};


// button syling
const ButtonStyle = {
    padding: '20px', // Increase padding for larger buttons
    width: '100%', // Make button full width of the sidebar container
    border: 'none',
    borderRadius: '0 5px 5px 0', // Rounded corners on the side sticking out
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Transition for the sliding effect
    margin: '5px 0', // Margin between buttons
    textAlign: 'left', // Align text to the left
    fontSize: '18px', // Increase font size if needed
    height: '10%', // Each button will take up 10% of the sidebar height
    flexGrow: 1, // Allow buttons to grow and fill the container

};

const hoverEffect = {
    transform: 'translateX(10px)', // Slide to the right on hover
};


const SidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align buttons to the left side
    position: 'fixed', // Make sidebar fixed to the side of the screen
    left: 0,
    top: 0,
    width: '250px', // Width of the sidebar
    height: '100%', // Sidebar spans the full height of the viewport
    backgroundColor: '#333', // Light background for the sidebar
    padding: '10px',
    boxSizing: 'border-box',
    justifyContent: 'space-between', // Distribute buttons evenly

};


const HeaderStyle = {
    color: '#FFFFFF', // A bright color for better visibility on a black background
    fontSize: '24px', // Keeping the font size large for better readability
    position: 'absolute', // Positioning it absolutely will take it out of the normal document flow
    top: '50%', // Position it halfway down the parent container
    left: '50%', // Position it halfway across the parent container
    transform: 'translate(-50%, -50%)', // Offset the header by half its width and height for centering
    textAlign: 'center', // Center-align the text
    zIndex: '10', // Ensure it's above other elements (if necessary)
};



const HoverButton = ({ style, onClick, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverStyle = {
        ...style,
        ...(isHovered ? hoverEffect : null),
    };

    return (
        <button
            style={hoverStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
};


const handleGame = () => {

    window.location.href = "/game"; // Redirect to the game
};

const handleChat = () => {

    window.location.href = "/chat"; // Redirect to the chat
};

const handleFood = () => {

    window.location.href = "/food"; // Redirect to the food
};

const handleMovies = () => {

    window.location.href = "/movie"; // Redirect to the movies
};

const handleSettings = () => {

    window.location.href = "/setting"; // Redirect to the setting
};

const handleProfile = () => {

    window.location.href = "/profile"; // Redirect to the profile
};

const handleSignOut = () => {

    window.location.href = "/"; // Redirect to the welcome screen
};

export default function Homepage() {


    return (
        <div style={HomePageContainerStyle}>
            {/* header for homepage */}
            <h1 style={HeaderStyle}>Welcome to Homepage</h1>
            <div style={SidebarStyle}>
                {/* creating a game button, and direct to the game page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleGame}>Game</HoverButton>

                {/* creating a chat button, and direct to the chat page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleChat}>Chat</HoverButton>

                {/* creating a food button, and direct to the food page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleFood}>Order Food</HoverButton>

                {/* creating a movies button, and direct to the movies page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleMovies}>Movies</HoverButton>

                {/* creating a settings button, and direct to the settings page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleSettings}>Settings</HoverButton>

                {/* creating a profile button, and direct to the profile page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleProfile}>Profile</HoverButton>

                {/*creating a signout button, and direct to the login page with ButtonStyling for the button */}
                <HoverButton style={ButtonStyle} onClick={handleSignOut}>Sign Out</HoverButton>
            </div>
        </div>
    );
}
