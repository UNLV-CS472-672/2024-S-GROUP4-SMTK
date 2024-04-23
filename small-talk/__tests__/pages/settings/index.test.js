import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from '../../../pages/settings/index.js';

describe("Settings Page", () => {
    it("Makes sure Settings page content renders properly", () => {
        render(<Settings />);
        const titleElement = screen.getByText("Settings Page");
        expect(titleElement).toBeInTheDocument();
    })
})