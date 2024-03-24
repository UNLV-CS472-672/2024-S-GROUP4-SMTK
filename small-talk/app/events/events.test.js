import React from 'react';
import { render, screen } from '@testing-library/react';
import Events from './page.js'; // file name component is from has to be exact ...

/*
    Test case for the Events page in .../small-talk/app/events
    Simply renders the page then checks if the expected content exists in the render
*/


// Test if events page renders properly
describe("Events Page", () =>
{
    it("Makes sure Events page content renders properly", () =>
    {
        // Render Events page
        render(<Events />);

        // Get page content
        const titleElement = screen.getByText("Events Page");
        const currentEvents = screen.getByText("Current Events");
        const upcomingEvents = screen.getByText("Upcoming Events");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(currentEvents).toBeInTheDocument();
        expect(upcomingEvents).toBeInTheDocument();
    })
})