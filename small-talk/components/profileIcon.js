/**
 * 
 */
import React from 'react';
import { Icons } from './icons.js';

export const ProfileIcon = ({ avatarID, backgroundID, avatarClass, backgroundClass }) => {
    const avatar = Icons.avatars[avatarID];
    const background = Icons.backgrounds[backgroundID];

    return (
        <div className={`relative rounded-full ${ background.color } ${ backgroundClass }`}>
            <img src={ avatar.imgSrc } alt={ avatar.altText } className={`relative ${ avatarClass }`}/>
        </div>    
    )
}

export default ProfileIcon;