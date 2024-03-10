import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const ThemeLayout = ({ children }) => {
    return(
        <div className="w-full min-h-screen flex flex-col">
            <TopBar/>
            <SideBar/>
            <div className="pt-[7.4%] pl-[15%]">
                {children}
            </div>
        </div>
    );
};

export default ThemeLayout;