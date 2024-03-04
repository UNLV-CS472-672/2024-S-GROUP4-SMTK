import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const themeLayout = ({ children }) => {
    <div className="w-full min-h-screen">
        <TopBar></TopBar>
        <SideBar></SideBar>
    </div>
}

export default themeLayout;