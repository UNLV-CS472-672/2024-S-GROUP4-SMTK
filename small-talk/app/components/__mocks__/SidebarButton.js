import React from "react";

const SidebarButton = ({ redirect, imgSrc, altText, width, height, marginLeft }) =>{
    return (
        <div data-testid="sidebar-button" data-redirect={redirect} data-imgsrc={imgSrc} alt={altText} style={{ width, height, marginLeft }}>
            {altText}
        </div>
    )
}
export default SidebarButton;