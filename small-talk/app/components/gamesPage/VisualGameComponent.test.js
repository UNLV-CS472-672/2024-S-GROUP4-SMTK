import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import VisualGameComponent from './VisualGameComponent';

// Mocking the game data for single player
jest.mock('../../data/gameData/singlePlayer.json', () => [
    { id: 1, name: 'Snake', imgPath: '/img/snake.jpeg'},
], { virtual: true });

describe('VisualGameComponent', () => {
    // Mocking window.alert to prevent actual alerts during testing
    beforeAll(() => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    // Restoring window.alert after all tests are done
    afterAll(() => {
        window.alert.mockRestore();
    });

    // Rendering VisualGameComponent before each test
    beforeEach(() => {
        render(<VisualGameComponent gameDataPath="singlePlayer.json" />);
    });

    // Test to check if single player items are loaded and displayed
    it('loads and displays single player items', async () => {
        // Wait until the item with text 'Snake' is rendered
        const Snake = await screen.findByText('Snake');
        // Check if the item is rendered
        expect(Snake).toBeInTheDocument();
    });

    // Test to check if selection of a game item toggles properly
    it('toggles selection of a game item', async () => {
        // Wait until the item with text 'Snake' is rendered
        const item = await screen.findByText('Snake');
        // Click on the item to select it
        fireEvent.click(item);
        // Check if the item's class changes after selection
        expect(item.closest('.game-item')).toHaveClass('bg-blue-800 text-white');
        // Click again to deselect and check if the class is removed
        fireEvent.click(item);
        expect(item.closest('.game-item')).not.toHaveClass('bg-blue-800 text-white');
    });

    // Test to check if game confirmation is displayed and triggered when an item is selected
    it('displays and triggers game confirmation when an item is selected', async () => {
        // Wait until the item with text 'Snake' is rendered
        const item = await screen.findByText('Snake');
        // Click on the item to select it
        fireEvent.click(item);
        // Wait until the confirmation button is rendered
        const confirmButton = await screen.findByText('Confirm');
        // Check if the confirmation button is rendered
        expect(confirmButton).toBeInTheDocument();
        // Click on the confirmation button and check if alert is triggered
        fireEvent.click(confirmButton);
        expect(window.alert).toHaveBeenCalledWith('Your Game is Loading and will be Opening soon!');
    });
});
