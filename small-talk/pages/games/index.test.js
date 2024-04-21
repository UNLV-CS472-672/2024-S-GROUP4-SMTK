import React from 'react';
import { render, screen } from '@testing-library/react';
import Games from './index.js';

describe("Games Page", () => {
    it("Makes sure Games page content renders properly", () => {
        render(<Games />);
        const titleElement = screen.getByText("Games Page");
        expect(titleElement).toBeInTheDocument();
    })
})