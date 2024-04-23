import React from 'react';
import { render, screen } from '@testing-library/react';
import Events from '../../../pages/events/index.js';

describe("Events Page", () => {
    it("Makes sure Events page content renders properly", () => {
        render(<Events />);
        const titleElement = screen.getByText("Today's Events");
        expect(titleElement).toBeInTheDocument();
    })
})