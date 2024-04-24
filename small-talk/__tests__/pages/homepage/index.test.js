import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../../pages/homepage/index.js';

describe("Home Page", () => {
    it("Makes sure Home page content renders properly", () => {
        render(<Home />);
        const titleElement = screen.getByText("Home");
        expect(titleElement).toBeInTheDocument();
    })
})