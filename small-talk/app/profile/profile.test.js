import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './page.js';

/*
    Test case for Profile page in .../small-talk/app/profile
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Profile page renders properly 
describe("Profile Page", () =>
{
    it("Makes sure Profile page content renders properly", () =>
    {   
        // Render Profile Page
        render(<Profile />);

        // Get page content
        const titleElement = screen.getByText("Profile Page");
        const avatar = screen.getByText("Avatar");
        const pBoard = screen.getByText("Personalized Board");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(pBoard).toBeInTheDocument();
    })
})