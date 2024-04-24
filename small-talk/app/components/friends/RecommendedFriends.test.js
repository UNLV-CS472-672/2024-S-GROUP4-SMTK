import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RecommendedFriends from '../../../app/components/friends/RecommendedFriends.js';
describe("renders RecommendedFriends component", () => {
    it("Makes sure RecommendedFriends component renders properly", () => {
        render(<RecommendedFriends />);
        //await waitFor(()) => {
        const titleElement = screen.getByText("Recommended Friends", { selector: 'h2' });
        expect(titleElement).toBeInTheDocument();
        //});
    
    })
})