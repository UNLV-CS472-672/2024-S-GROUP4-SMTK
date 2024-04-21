/**
 * SideBar.js is a component that wraps the SidebarButton.js components into a uniform column that spans from the bottom of
 * the TopBar.js component to the bottom of the website.
 * 
 * @param isVisible - State that determines if the sidebar is visible or not
 */
import React, { useState, useEffect } from 'react';
import SidebarButton from "./SidebarButton";
import SB_ExpandButton from "./SB_ExpandButton";
import buttons from "../data/sidebarButtons.json";
import expand from "../data/sidebarExpand.json";

const SideBar = ({ isVisible }) => {
	const [isMobile, setIsMobile] = useState(false);

	// Runs once after initial render
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
		// Called when the window is resized
		window.addEventListener('resize', checkMobile);
		// Calls the function
		checkMobile();
		// Cleans up listener
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
		<div className={`flex flex-col fixed mt-24 md:mt-32 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
			{ isMobile ? (
				<div className="flex flex-col w-screen h-screen text-black bg-sky-400" data-testid="sidebar-expand" style={{backgroundColor: "rgb(60 175 255)"}}>
					{ expand.map((button, index) => (
						<SB_ExpandButton key={index} {...button}/>
					))}
				</div>
			) : (
				<div className="relative flex flex-col h-screen w-64" data-testid="sidebar">
					<div className="relative z-10 flex flex-col">
						{ buttons.map((button, index) => (
								<SidebarButton key={index} {...button}/>
						))}
					</div>
					<div className="absolute h-screen w-2/5" style={{backgroundColor: "rgb(60 175 255"}}/>
				</div>
			)};
		</div>
    ) 
};

export default SideBar;