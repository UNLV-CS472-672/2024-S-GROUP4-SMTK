"use client"
import Link from 'next/link'

// Styling functions
const HomePageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',   // buttons on the left side
    justifyContent: 'top',  // move button to top
    height: '100vh',
};

// button syling
const ButtonStyle = {
padding: '10px 20px',
marginTop: '20px',
border: 'none',
borderRadius: '5px',
backgroundColor: '#007bff', // button backgroud
color: '#fff', // text color
cursor: 'pointer',
transition: 'background-color 0.3s',
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

export default function homepage() {
return (
    <div style={HomePageContainerStyle}>
        {/* header for homepage */}
        <h1>Welcome to Homepage</h1>

        {/* creating a game button, and direct to the game page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleGame}>Game</button>

        {/* creating a chat button, and direct to the chat page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleChat}>Chat</button>

        {/* creating a food button, and direct to the food page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleFood}>Order Food</button>

        {/* creating a movies button, and direct to the movies page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleMovies}>Movies</button>

        {/* creating a settings button, and direct to the settings page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleSettings}>Settings</button>

        {/* creating a profile button, and direct to the profile page with ButtonStyling for the button */}
        <button style={ButtonStyle} onClick={handleProfile}>profile</button>

    </div>
    );
}
