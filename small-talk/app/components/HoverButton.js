import React from 'react';

const HoverButton = ({ onClick, children }) => {
    return (
        <button
            className="w-full flex items-center justify-start relative overflow-hidden hover:translate-x-5"
            style={{
                padding: '10px',
                height: '15%',
                backgroundImage: "url('/img/real-button.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            onClick={onClick}
        >
            <div
                style={{marginLeft: '20px'}}
            >
                {children}
            </div>
        </button>
    );
};

export default HoverButton;