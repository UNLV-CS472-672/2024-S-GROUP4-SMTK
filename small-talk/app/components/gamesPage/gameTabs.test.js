import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GameTabs from './gameTabs';

// ai-gen start (ChatGPT-3.5, 2)
// used ai for documentation

// Mocking VisualGameComponent to simplify testing
jest.mock('./VisualGameComponent', () => {
    const MockVisualGameComponent = () => <div>VisualGameComponent Content</div>;
    MockVisualGameComponent.displayName = 'VisualGameComponent';
    return MockVisualGameComponent;
});

describe('GameTabs component', () => {
    beforeEach(() => {
        render(<GameTabs />);
    });

    // Test case for single player games
    it('displays the single player games when selected', () => {
        // Click on the SinglePlayer button
        fireEvent.click(screen.getByText(/SinglePlayer/));
        
        // Check if the SinglePlayer button has the selected class
        const singleplayerButton = screen.getByText(/SinglePlayer/).closest('button');
        expect(singleplayerButton).toHaveClass('bg-blue-100 text-black');

        // Check if VisualGameComponent is rendered when SinglePlayer is selected
        expect(screen.getByText('VisualGameComponent Content')).toBeInTheDocument();

        // Click on the SinglePlayer button again to toggle it off
        fireEvent.click(singleplayerButton);
        
        // Check if the selected class is removed after clicking again
        expect(singleplayerButton).not.toHaveClass('bg-blue-100 text-black');
    });

    // Test case for multiplayer games
    it('displays the multi player games when selected', () => {
        // Click on the Multiplayer button
        fireEvent.click(screen.getByText(/Multiplayer/));

        // Check if the Multiplayer button has the selected class
        const multiplayerButton = screen.getByText(/Multiplayer/).closest('button');
        expect(multiplayerButton).toHaveClass('bg-blue-100 text-black');

        // Check if VisualGameComponent is rendered when Multiplayer is selected
        expect(screen.getByText('VisualGameComponent Content')).toBeInTheDocument();

        // Click on the Multiplayer button again to toggle it off
        fireEvent.click(multiplayerButton);

        // Check if the selected class is removed after clicking again
        expect(multiplayerButton).not.toHaveClass('bg-blue-100 text-black');
    });
});

// ai-gen end
