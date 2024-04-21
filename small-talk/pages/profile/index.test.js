import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './index.js';

describe("Profile Page", () => {
    it("Makes sure Profile page content renders properly", () => {
        render(<Profile />);
        const titleElement = screen.getByText("Profile Page");
        expect(titleElement).toBeInTheDocument();
    })
})