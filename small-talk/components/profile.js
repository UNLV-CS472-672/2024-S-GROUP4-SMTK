/**
 * 
 */
import React, { useState } from 'react';
import ProfileIcon from './profileIcon.js';
import ProfileDrop from './profileDrop.js';

export const Profile = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    return (
        <div className="relative flex flex-col justify-self-end">
            <button onClick={ toggleDropdown }>
                {/* TODO: Store IDs in MongoDB and get values for user specific layouts */}
                <ProfileIcon avatarID={1} backgroundID={2} avatarClass={`w-6`} backgroundClass={`p-1`}/>
                <ProfileDrop isVisible={ isDropdownVisible }/>
            </button>
        </div>
    )
}

export default Profile;