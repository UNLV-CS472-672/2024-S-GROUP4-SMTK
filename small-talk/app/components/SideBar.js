/**
 * SideBar.js is a component that wraps the SidebarButton.js components into a uniform column that spans from the bottom of
 * the TopBar.js component to the bottom of the website.
 * 
 * @param isVisible - State that determines if the sidebar is visible or not
 */
import React from 'react';
import SidebarButton from "./SidebarButton";
import SB_ExpandButton from "./SB_ExpandButton";
import buttons from "../data/sidebarButtons.json";
import expand from "../data/sidebarExpand.json";

const SideBar = ({ isExpanded }) => {
    return (
    	<div className={`flex flex-col fixed mt-24 md:mt-32 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
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