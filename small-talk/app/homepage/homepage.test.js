import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './page.js';

/*
    Test case for Homepage page in .../small-talk/app/homepage
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Homepage renders properly 
describe("Home Page", () =>
{
    it("Makes sure Home page content renders properly", () =>
    {   
        // Render Homepage
        render(<Homepage />);

        // Get page content
        const titleElement = screen.getByText("Home Page");
        const bb = screen.getByText("Bulletin Board");
        const friends = screen.getByText("Friends");
        const chat = screen.getByText("Chatroom");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(bb).toBeInTheDocument();
        expect(friends).toBeInTheDocument();
        expect(chat).toBeInTheDocument();
    })
})