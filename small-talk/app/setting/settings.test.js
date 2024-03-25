import React from 'react';
import { render, screen } from '@testing-library/react';
import Setting from './page.js';

/*
    Test case for Setting page in .../small-talk/app/setting
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Setting page renders properly 
describe("Setting Page", () =>
{
    it("Makes sure Setting page content renders properly", () =>
    {   
        // Render Setting Page
        render(<Setting />);

        // Get page content
        const titleElement = screen.getByText("Settings Page");
        const ldt = screen.getByText("Light and Dark Theme");
        const update = screen.getByText("Update Information");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(ldt).toBeInTheDocument();
        expect(update).toBeInTheDocument();
    })
})