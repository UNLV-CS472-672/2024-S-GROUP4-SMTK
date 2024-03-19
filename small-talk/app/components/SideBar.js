import React from 'react';
import SidebarButton from "./SidebarButton";
import buttons from "../data/sidebarButtons.json"

const SideBar = () => {
    // Uses the list of buttons in the sideBarButtons json and their properties to render
    // a new button for each member of that list
    return (
        <div className="flex flex-col items-start fixed top-[15%] h-[85%] w-[15%]" data-testid="sidebar">
          {buttons.map((button, index) => (
            <SidebarButton key={index} {...button} />
          ))}
        </div>
    );
};

export default SideBar;