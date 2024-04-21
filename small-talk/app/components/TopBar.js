/**
 * Topbar.js is a component that wraps the three-bar functionality, the logo, and the profile functionality to display
 * uniformly on the website. 
 * 
 * @param toggleSidebar - Manages the state of the sidebar to determine whether it should be visible or not.
 */

import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import Link from "next/link";

const TopBar = ({ toggleSidebar }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    return (
        <div className="flex flex-row justify-between fixed h-24 w-full bg-[#3CAFFF] md:h-32">
            <button onClick={toggleSidebar}>
                <img src="/img/icons/three-bar.png" alt="Three Bar" className="ml-4 h-12 md:h-16 md:ml-8"/>
            </button>
            <button>
                <Link href='/homepage'>
                    <img src="/img/logo.png" alt="Logo" className="h-20 md:h-28"/>
                </Link>
            </button>
            <button onClick={toggleDropdown}>
                <img src="/img/icons/profile-temp.png" alt="Profile" className="mr-4 h-20 md:h-28 md:mr-8"/>
                <ProfileDropdown isVisible={isDropdownVisible}/>
            </button>
        </div>
    );
};

export default TopBar;