import React from 'react';
import { render, screen } from '@testing-library/react';
import Health from './index.js';

describe("Health Page", () => {
    it("Makes sure Health page content renders properly", () => {
        render(<Health />);
        const titleElement = screen.getByText("Health Page");
        expect(titleElement).toBeInTheDocument();
    })
})