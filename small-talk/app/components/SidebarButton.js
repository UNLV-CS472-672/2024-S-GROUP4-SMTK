/**
 * SidebarButton.js is a specific button when it is in the nonexpanded state that is intended to be used for the layout
 * sidebar list of buttons. e.g. Game, Chat, Order Food, etc.
 * 
 * @param {string} redirect - the redirect path for the specific button
 * @param {string} defaultImg - the path for the image associated with this sidebar button when it is not hovered
 * @param {string} hoverImg - the path for the image associated with this sidebar button when it is hovered
 * @param {string} altText - the name of the button used for when the image cannot load (or other defined cases)
 */
import React, { useState } from 'react';
import Link from "next/link";

const SidebarButton = ({ redirect, defaultImg, hoverImg, altText }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <div 
            className="bg-white h-[17.6%] m-0"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link href={ redirect }>
                {!isHovering ? (
                    <img src={ defaultImg } alt={ altText } style={{ width: "67%" }}/>
                ) : (
                    <img src={ hoverImg } alt={ altText } className="m-0"/>
                )}
            </Link>
        </div>
    );
};

export default SidebarButton;