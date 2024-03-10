/**
 * SidebarButton.js is a specific button using the HoverButton component style that is intended to be used for the homepage
 * sidebar list of buttons. e.g. Game, Chat, Order Food, etc.
 * 
 * @param {string} redirect - the redirect path for the specific button
 * @param {string} imgSrc - the path for the image associated with this sidebar button
 * @param {string} altText - the name of the button used for when the image cannot load (or other defined cases)
 * @param {string} width
 * @param {string} height
 * @param {string} marginLeft - width, height, and marginLeft define the custom sizes for the images to look good in the sidebar
 *                              these images should be resized to be more responsive and consistent down the line.
 */

import HoverButton from './HoverButton';

const SidebarButton = ({ redirect, imgSrc, altText, width, height, marginLeft }) => {
    const handleRedirect = (path) => () => {
        window.location.href = path; 
    };

    return (
        <HoverButton onClick={handleRedirect(redirect)}>
            <img src={imgSrc} alt={altText} style={{ width, height, marginLeft }} />
        </HoverButton>
    );
};

export default SidebarButton;