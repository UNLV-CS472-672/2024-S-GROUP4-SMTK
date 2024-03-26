import React from 'react';
import { render, screen } from '@testing-library/react';
import Games from './page.js';

/*
    Test case for Games page in .../small-talk/app/game
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Games page renders properly 
describe("Games Page", () =>
{
    it("Makes sure Games Page content renders properly", () =>
    {   
        // Render Games page
        render(<Games />);

        // Get page content
        const titleElement = screen.getByText("Games Page");
        const singlePlayer = screen.getByText("Singleplayer Games");
        const multiplayer = screen.getByText("Multiplayer Games");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(singlePlayer).toBeInTheDocument();
        expect(multiplayer).toBeInTheDocument();
    })
})