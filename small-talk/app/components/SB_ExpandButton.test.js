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
        const redirect = "/game";
        const imgSrc = "/img/games-tab.png";
        const altText = "Games";
        const width = "30%";
        const height = "auto";
        const marginLeft = "5%";
        const margin = "5%";
        const backgroundColor = "rgb(251 207 232)";

        // Render SB_ExpandButton using properties
        render(<SB_ExpandButton redirect = {redirect}
                                imgSrc = {imgSrc}
                                altText = {altText}
                                width = {width}
                                height = {height}
                                marginLeft = {marginLeft}
                                margin = {margin}
                                backgroundColor = {backgroundColor} />)

        // Get SB_ExpandButton image from rendered component
        const buttonImage = screen.getByAltText(altText);

        // Get SB_ExpandButton link from rendered component
        const buttonLink = screen.getByText(altText);

        // Check if image properties match
        expect(buttonImage).toHaveAttribute("src", imgSrc);
        expect(buttonImage).toHaveAttribute("alt", altText);
        expect(buttonImage).toHaveAttribute('style', `width: ${width}; height: ${height}; margin: ${margin};`);

        // Check if link properties match
        expect(buttonLink).toHaveAttribute("href", redirect);
        expect(buttonLink).toHaveAttribute("style", `margin-left: ${marginLeft};`);
        expect(buttonLink).toHaveTextContent(altText);
    });

    // Test 2: Checks if button has correct background color when hovered (hoverColor)
    it("Checks if button has correct background color when hovered (hoverColor)", () =>
    {
        // SB_ExpandButton properties -- using health button properties
        const redirect = "/health";
        const imgSrc = "/img/health-tab.png";
        const altText = "Health";
        const width = "30%";
        const height = "auto";
        const marginLeft = "5%";
        const margin = "5%";
        const backgroundColor = "rgb(248 113 113)";

        // Render SB_ExpandButton using properties
        const { container } = render(<SB_ExpandButton redirect = {redirect}
                                                      imgSrc = {imgSrc}
                                                      altText = {altText}
                                                      width = {width}
                                                      height = {height}
                                                      marginLeft = {marginLeft}
                                                      margin = {margin}
                                                      backgroundColor = {backgroundColor} />)

        // Get SB_ExpandButton container from rendered component
        const buttonContainer = container.firstChild;
        
        // Simulate mouse hovering over component
        fireEvent.mouseEnter(buttonContainer);
        
        // Check if component has correct background color when hovered
        expect(buttonContainer).toHaveStyle("background-color: rgb(34 211 238)");
    });

    // Test 3: Checks if button has correct background color when not hovered (backgroundColor)
    it("Checks if button has correct background color when not hovered (backgroundColor)", () =>
    {
        // SB_ExpandButton properties -- using events button properties
        const redirect = "/events";
        const imgSrc = "/img/event-tab.png";
        const altText = "Events";
        const width = "25%";
        const height = "auto";
        const marginLeft = "10%";
        const margin = "5%";
        const backgroundColor = "rgb(251 146 60)";

        // Render SB_ExpandButton using properties
        const { container } = render(<SB_ExpandButton redirect = {redirect}
                                                      imgSrc = {imgSrc}
                                                      altText = {altText}
                                                      width = {width}
                                                      height = {height}
                                                      marginLeft = {marginLeft}
                                                      margin = {margin}
                                                      backgroundColor = {backgroundColor} />)

        // Get SB_ExpandButton container from rendered component
        const buttonContainer = container.firstChild;

        // Simulate mouse hovering then unhovering over component
        fireEvent.mouseEnter(buttonContainer);
        fireEvent.mouseLeave(buttonContainer);

        // Check if component has correct background color when hovered
        expect(buttonContainer).toHaveStyle(`background-color: ${backgroundColor}`);
    });
});
