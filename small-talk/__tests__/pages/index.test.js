import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index.js';

describe("Home Page", () => {
    it("Makes sure Home page content renders properly", () => {
        render(<Home />);
        const titleElement = screen.getByText("Blank Page", { selector: 'h2' });
        expect(titleElement).toBeInTheDocument();
    })
})
