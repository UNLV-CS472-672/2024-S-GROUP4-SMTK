import React from 'react';
import { render, screen } from '@testing-library/react';
import Friends from './page.js'; // file name component is from has to be exact ...

/*
    Test case for the Friends page in .../small-talk/app/friends
    Simply renders the page then checks if the expected content exists in the render
*/


// Test if friends page renders properly
describe("Friends Page", () =>
{
    it("Makes sure Friends page content renders properly", () =>
    {
        // Render Food page
        render(<Friends />);

        // Get page content
        const friendsPage = screen.getByText("Friends Page");
        const friendsList = screen.getByText("List of Friends");
        const chatrooms = screen.getByText("Chatrooms");
        const recommendedUsers = screen.getByText("Recommended Users");

        // Check if expected content exists
        expect(friendsPage).toBeInTheDocument();
        expect(friendsList).toBeInTheDocument();
        expect(chatrooms).toBeInTheDocument();
        expect(recommendedUsers).toBeInTheDocument();
    })
})