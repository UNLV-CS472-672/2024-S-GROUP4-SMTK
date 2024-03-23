import React from "react";

const SidebarButton = ({ redirect, defaultImg, hoverImg, altText, }) =>{
    return (
        <div data-testid="sidebar-button" redirect={redirect} defaultimg={defaultImg} alttext={altText} hoverimg={hoverImg}>
        </div>
    )
}
export default SidebarButton;