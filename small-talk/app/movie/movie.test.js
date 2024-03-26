import React from 'react';
import { render, screen } from '@testing-library/react';
import Movie from './page.js';

/*
    Test case for Movie page in .../small-talk/app/movie
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Movie page renders properly 
describe("Movie Page", () =>
{
    it("Makes sure Movie page content renders properly", () =>
    {   
        // Render Movie Page
        render(<Movie />);

        // Get page content
        const titleElement = screen.getByText("Movies Page");
        const media = screen.getByText("List of Media Applications");
        const lFriends = screen.getByText("List of Friends currently watching");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(media).toBeInTheDocument();
        expect(lFriends).toBeInTheDocument();
    })
})