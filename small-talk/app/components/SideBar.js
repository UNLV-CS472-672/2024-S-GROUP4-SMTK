import React from 'react';
import SidebarButton from "./SidebarButton";
import SB_ExpandButton from "./SB_ExpandButton";
import buttons from "../data/sidebarButtons.json";
import expand from "../data/sidebarExpand.json";

const SideBar = ({ isExpanded }) => {
    // Uses the list of buttons in the sideBarButtons json and their properties to render
    // a new button for each member of that list
    return (
      <div className="flex flex-col fixed top-[15%] h-[85%] w-[15%]" data-testid="sidebar">
        { !isExpanded ? (
            <div data-testid="sidebar">
                {buttons.map((button, index) => (
                <SidebarButton key={index} {...button}/>
            ))}
          </div>
        ) : (
            <div className="text-black" data-testid="sidebar-expand">
                {expand.map((button, index) => (
                    <SB_ExpandButton key={index} {...button} />
                ))}
            </div>
        ) }
      </div>
    ) 
};

export default SideBar;