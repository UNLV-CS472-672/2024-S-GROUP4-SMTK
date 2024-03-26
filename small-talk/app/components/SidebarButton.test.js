import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import SidebarButton from './SidebarButton';

/*
    Test case for the SidebarButton component in .../small-talk/app/components
    Test 1: Renders SidebarButton then checks if correct image rendered when not hovered (defaultImg)
    Test 2: Renders SidebarButton then checks if correct image rendered when hovered (hoverImg)
    Test 3: Renders SidebarButton then checks if page redirects correctly when clicked **doesn't work currently**
*/

// jest.mock("next/link", () => { return ({children}) => { return children; }});

// let originalLocation;

// beforeAll(() =>
// {
//     originalLocation = window.location;
//     delete window.location;
//     window.location = { href: "", assign: jest.fn() };
// });

// afterAll(() =>
// {
//     window.location = originalLocation;
// });

describe("SidebarButton Component", () =>
{
    // Test 1: Renders SidebarButton then checks if correct image rendered when not hovered (defaultImg)
    it("SidebarButton renders default image properly when not hovered", () =>
    {
        // SidebarButton properties -- using health button properties
        const redirect = "/health";
        const defaultImg = "/img/buttons/health-default.png";
        const hoverImg = "/img/buttons/health-extend.png";
        const altText = "Health";
        
        // Render SidebarButton using properties
        render(<SidebarButton redirect = {redirect} 
                              defaultImg = {defaultImg} 
                              hoverImg = {hoverImg} 
                              altText = {altText} />);

        // Get SidebarButton from rendered component
        const button = screen.getByAltText(altText);

        // Check if component exists and has correct default image when not hovered
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("src", defaultImg);
    });
    
    // Test 2: Renders SidebarButton then checks if correct image rendered when hovered (hoverImg)
    it("SidebarButton renders hover image properly when hovered", () =>
    {
        // SidebarButton properties -- using events button properties
        const redirect = "/events";
        const defaultImg = "/img/buttons/event-default.png";
        const hoverImg = "/img/buttons/event-extend.png";
        const altText = "Events";
        
        // Render SidebarButton using properties
        render(<SidebarButton redirect = {redirect} 
                              defaultImg = {defaultImg} 
                              hoverImg = {hoverImg} 
                              altText = {altText} />);

        // Get SidebarButton from rendered component
        const button = screen.getByAltText(altText);
        
        // Simulate mouse cursor hovering button
        fireEvent.mouseEnter(button);

        // Check if component changes to correct image when hovered
        expect(button).toHaveAttribute("src", hoverImg);
        
        // Simulate mouse cursor unhovering button
        fireEvent.mouseLeave(button);
        
        // Check if component changes back to correct image when not hovered
        expect(button).toHaveAttribute("src", defaultImg);
    });
    
    // Test 3: Renders SidebarButton then checks if page redirects correctly when clicked **doesn't work currently**
    // it("SidebarButton redirects to correct page properly when clicked", () =>
    // {
    //     // SidebarButton properties -- using chat button properties
    //     const redirect = "/chat";
    //     const defaultImg = "/img/buttons/chat-default.png";
    //     const hoverImg = "/img/buttons/chat-extend.png";
    //     const altText = "Chat";
    
    //     // Render SidebarButton using properties
    //     render(<SidebarButton redirect = {redirect} 
    //                           defaultImg = {defaultImg} 
    //                           hoverImg = {hoverImg} 
    //                           altText = {altText} />);
    
    //     // Get SidebarButton from rendered component
    //     const button = screen.getByAltText(altText);
    
    //     // Simulate mouse click on button
    //     fireEvent.click(button);
    
    //     // Check if component redirects to page properly
    //     expect(window.location.href).toBe(redirect);
    // });
});