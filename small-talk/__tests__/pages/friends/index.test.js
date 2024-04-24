import React from 'react';
import { render, screen } from '@testing-library/react';
import Friends from '../../../pages/friends/index.js';

describe("Friends Page", () => {
    it("Makes sure Friends page content renders properly", () => {
        render(<Friends />);
        const titleElement = screen.getByText("Your Friends");
        expect(titleElement).toBeInTheDocument();
    })
})