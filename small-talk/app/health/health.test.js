import React from 'react';
import { render, screen } from '@testing-library/react';
import Health from './page.js';

/*
    Test case for Health page in .../small-talk/app/health
    Check that the page renders and check if the expected content exists in the render
*/

// Test if Health page renders properly 
describe("Health Page", () =>
{
    it("Makes sure Health Page content renders properly", () =>
    {   
        // Render Health page
        render(<Health />);

        // Get page content
        const titleElement = screen.getByText("Health Page");
        const doctor = screen.getByText("Doctor Information");
        const nurse = screen.getByText("Nurse Information");
        const chat = screen.getByText("Chatroom");

        // Check if expected content exists
        expect(titleElement).toBeInTheDocument();
        expect(doctor).toBeInTheDocument();
        expect(nurse).toBeInTheDocument();
        expect(chat).toBeInTheDocument();
    })
})