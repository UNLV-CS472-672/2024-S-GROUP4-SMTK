import React, { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const ThemeLayout = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return(
        <div className="w-full min-h-screen flex flex-col">
            <TopBar toggleSidebar={toggleSidebar}/>
            <SideBar isExpanded={isSidebarExpanded}/>
            <div className="pt-[7.4%] pl-[15%]">
                {children}
            </div>
        </div>
    );
};

export default ThemeLayout;