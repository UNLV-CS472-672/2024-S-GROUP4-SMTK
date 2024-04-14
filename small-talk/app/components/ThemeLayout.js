/**
 * ThemeLayout.js is a higher level component that wraps the TopBar and SideBar component in order for reusability
 * throughout the site. It is also responsible for managing the responsiveness and states of the website.
 * 
 * @param children - the content of the pages that is wrapped between ThemeLayout.
 */

import React, { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const ThemeLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="relative min-h-screen">
            <TopBar toggleSidebar={toggleSidebar}/>
            <div className="flex">
                <SideBar isExpanded={isSidebarVisible}/>
                <div className={`flex-1 mt-24 md:mt-32 ${isSidebarVisible ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ThemeLayout;