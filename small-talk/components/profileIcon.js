/**
 * 
 */
import React from 'react';
import { Icons } from './icons.js';

export const ProfileIcon = ({ avatarID, backgroundID }) => {
    const avatar = Icons.avatars[avatarID];
    const background = Icons.backgrounds[backgroundID];

    return (
        <div className={`relative rounded-full ${background.color} p-1`}>
            <img src={ avatar.imgSrc } alt={ avatar.altText } className={`relative w-6`}/>
        </div>    
    )
}

export default ProfileIcon;