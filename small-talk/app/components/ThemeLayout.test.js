import React from "react";
import ThemeLayout from "./ThemeLayout";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

/*
    Test case for the ThemeLayout component in .../small-talk/app/components
    Test 1: Checks if component renders children components correctly
    Test 2: Checks if toggleSidebar function works properly **doesn't work properly
*/

// AI Provided Code: MockTopBar and MockSideBar const added to pass npm run lint test
// Mock TopBar component to toggleSideBar when clicked
jest.mock("./TopBar", () => {
    const MockTopBar = ({ toggleSidebar }) => (
        <div data-testid="top-bar" onClick={toggleSidebar}/>
    )
    MockTopBar.displayName = 'MockTopBar';
    return MockTopBar;
});

jest.mock("./SideBar", () => {
    const MockSideBar = ({ isVisible }) => (
        <div data-testid="side-bar" className={isVisible ? "expanded" : "collapsed"}/>
    );
    MockSideBar.displayName = 'MockSideBar';
    return MockSideBar;
});

describe("ThemeLayout Component", () =>
{
    // Test 1: Checks if component renders children components correctly
    it("Checks if component renders children components correctly", () =>
    {
        // Test child component
        const TestChild = () => <div>Child Test</div>;

        // Renders ThemeLayout with test child component
        render(<ThemeLayout><TestChild /></ThemeLayout>);

        // Get child component from rendered component
        const childElement = screen.getByText("Child Test");

        // Check if child component exists
        expect(childElement).toBeInTheDocument();
    });

    // Test 2: Checks if toggleSidebar function works properly
    it("Checks if toggleSidebar function works properly", async () =>
    {
        // Render ThemeLayout
        render(<ThemeLayout />);

        // Get TopBar and SideBar (collapsed) components from rendered component
        const topBar = screen.getByTestId("top-bar");
        const sideBar = screen.getByTestId("side-bar");

        // Check if SideBar starts as collapsed
        expect(sideBar).toHaveClass("collapsed");

        // Simulate mouse click on TopBar component
        fireEvent.click(topBar);

        // Clicking TopBar doesn't seem to update the SideBar when testing it ...
        await waitFor(() => {
            const updatedSideBar = screen.getByTestId("side-bar");
            expect(updatedSideBar).toHaveClass("expanded");
        });
    });
});