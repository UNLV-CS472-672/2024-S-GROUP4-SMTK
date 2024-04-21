import React from "react";
import SB_ExpandButton from "./SB_ExpandButton";
import { render, screen, fireEvent } from "@testing-library/react";

/*
    Test case for the SB_ExpandButton component in .../small-talk/app/components
    Test 1: Checks if button renders with correct properties
    Test 2: Checks if button has correct background color when hovered (hoverColor)
    Test 3: Checks if button has correct background color when not hovered (backgroundColor)
*/

describe("SB_ExpandButton Component", () =>
{
    // Test 1: Checks if button renders with correct properties
    it("Checks if button renders with correct properties", () =>
    {
        // SB_ExpandButton properties -- using game button properties
        const props = {
            redirect: "/games",
            imgSrc: "/img/icons/games-tab.png",
            altText: "Games",
            textClass: "text-lg ml-4",
            imageClass: "m-2 h-16",
            backgroundColor: "bg-pink-200"
        }

        // Render SB_ExpandButton using properties
        render(<SB_ExpandButton {...props} />);

        // Get SB_ExpandButton image, link, and text from rendered components
        const buttonImage = screen.getByAltText(props.altText);
        const buttonLink = screen.getByRole('link');
        const buttonText = screen.getByText(props.altText).closest('a');

        // Check if image properties match
        expect(buttonImage).toHaveAttribute("src", props.imgSrc);
        expect(buttonImage).toHaveAttribute("alt", props.altText);
        expect(buttonImage).toHaveClass(props.imageClass);

        // Check if text properties match
        expect(buttonText).toHaveClass(props.textClass);
        expect(buttonText).toHaveTextContent(props.altText);

        // Check if link properties match
        expect(buttonLink).toHaveAttribute("href", props.redirect);
    });

    // Test 2: Checks if button has correct background color when hovered (hoverColor)
    it("Checks if button has correct background color when hovered (hoverColor)", () =>
    {
        // SB_ExpandButton properties -- using health button properties
        const props = {
            redirect: "/health",
            imgSrc: "/img/icons/health-tab.png",
            altText: "Health",
            textClass: "text-lg ml-4",
            imageClass: "m-2 h-16",
            backgroundColor: "bg-red-400"
        }

        // Render SB_ExpandButton using properties
        const { container } = render(<SB_ExpandButton {...props} />);

        // Get SB_ExpandButton container from rendered component
        const buttonContainer = container.firstChild;
        
        // Check if component has correct background color when hovered
        fireEvent.mouseEnter(buttonContainer);      // Simulate mouse hovering over component
        expect(buttonContainer).toHaveClass('bg-cyan-400');
        
        fireEvent.mouseLeave(buttonContainer);      // Simulate mouse leaving component
        expect(buttonContainer).not.toHaveClass('bg-cyan-400');
    });

    // Test 3: Checks if button has correct background color when not hovered (backgroundColor)
    it("Checks if button has correct background color when not hovered (backgroundColor)", () =>
    {
        // SB_ExpandButton properties -- using events button properties
        const props = {
            redirect: "/events",
            imgSrc: "/img/icons/event-tab.png",
            altText: "Events",
            textClass: "text-lg ml-4",
            imageClass: "m-2 h-16",
            backgroundColor: "bg-orange-400"
        }

        // Render SB_ExpandButton using properties
        const { container } = render(<SB_ExpandButton {...props} />);

        // Get SB_ExpandButton container from rendered component
        const buttonContainer = container.firstChild;

        // Simulate mouse hovering then unhovering over component
        fireEvent.mouseEnter(buttonContainer);
        fireEvent.mouseLeave(buttonContainer);

        // Check if component has correct background color when hovered
        expect(buttonContainer).toHaveClass(props.backgroundColor);
    });
});
