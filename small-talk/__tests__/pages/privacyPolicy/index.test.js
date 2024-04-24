import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PP from '../../../pages/privacyPolicy/index.js';
describe("Privacy Page", () => {
    it("Makes sure Privacy Policy page content renders properly", () => {
        render(<PP />);
        //await waitFor(()) => {
        const titleElement = screen.getByText("Privacy Policy", { selector: 'h2' });
        expect(titleElement).toBeInTheDocument();
        //});
    
    })
})