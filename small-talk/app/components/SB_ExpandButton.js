/**
 * SB_ExpandButton.js is a specific button when it is in the expanded state that is intended to be used for the layout
 * sidebar list of buttons. e.g. Game, Chat, Order Food, etc.
 * 
 * @param {string} redirect - the redirect path for the specific button
 * @param {string} imgSrc - the path for the image associated with this sidebar button
 * @param {string} altText - the name of the button used for when the image cannot load (or other defined cases)
 * @param {string} width
 * @param {string} height
 * @param {string} marginLeft - intended to straighten the text from the image
 * @param {string} margin - width, height, and margin define the custom sizes for the images to look good in the sidebar
 *                          these images should be resized to be more responsive and consistent down the line.
 * @param {string} backgroundColor - the color for each individual button
 */

import React, { useState } from "react";
import Link from "next/link";

const SB_ExpandButton = ({ redirect, imgSrc, altText, width, height, marginLeft, margin, backgroundColor}) => {
    const [isHovering, setIsHovered] = useState(false);
    // Use 
    const hoverColor = "rgb(34 211 238)";

    return (
        <div 
            className={"flex justify-start items-center cursor-pointer h-[14.8%]"}
            style={{ backgroundColor: isHovering ? hoverColor : backgroundColor }}
            onMouseEnter = {() => setIsHovered(true)}
            onMouseLeave = {() => setIsHovered(false)}
        >
            <img src={imgSrc} alt={altText} style={{ width, height, margin }} />
            <Link href={redirect} style={{ marginLeft }}>{altText}</Link>
        </div>
    );
}

export default SB_ExpandButton;