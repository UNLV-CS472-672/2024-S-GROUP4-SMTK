import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from '../../../pages/movies/index.js';

describe("Movies Page", () => {
    it("Makes sure Movies page content renders properly", () => {
        render(<Movies />);
        const titleElement = screen.getByText("Movies Page");
        expect(titleElement).toBeInTheDocument();
    })
})