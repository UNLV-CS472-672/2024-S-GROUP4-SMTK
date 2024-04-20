/**
 * SB_ExpandButton.js is a specific button when it is in the expanded state that is intended to be used for the layout
 * sidebar list of buttons. e.g. Game, Chat, Order Food, etc.
 * 
 * @param {string} redirect - the redirect path for the specific button
 * @param {string} imgSrc - the path for the image associated with this sidebar button
 * @param {string} altText - the name of the button used for when the image cannot load (or other defined cases)
 * @param {string} textClass - className style to use in text
 * @param {string} imageClass - className style to use in images
 * @param {string} backgroundColor - the color for each individual button
 */
import React from "react";
import Link from "next/link";

const SB_ExpandButton = ({ redirect, imgSrc, altText, textClass, imageClass, backgroundColor}) => {
    return (
        <div className={`flex items-center items-stretch ${backgroundColor} hover:bg-cyan-400`}>
            <Link href={ redirect }>
                <div className="flex items-center">
                    <img src={ imgSrc } alt={ altText } className={ imageClass } />
                    <a className={ textClass }>{ altText }</a>
                </div>
            </Link>
        </div>
    );
}

export default SB_ExpandButton;