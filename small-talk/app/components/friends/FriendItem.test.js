import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FriendItem from '../../../app/components/friends/FriendItem.js';
describe("renders FriendItem component", () => {
    it("Makes sure FriendItem component renders properly", () => {
        render(<FriendItem />);
        //await waitFor(()) => {
        const titleElement = screen.getByText("Your Friends", { selector: 'h2' });
        expect(titleElement).toBeInTheDocument();
        //});
    
    })
})