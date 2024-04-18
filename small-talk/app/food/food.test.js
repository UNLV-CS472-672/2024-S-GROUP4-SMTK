import React from 'react';
import { render, screen } from '@testing-library/react';
import Food from './page'; // Ensure the correct file path and component name are used
import ThemeLayout from '../components/ThemeLayout'; // Ensure correct path
import MenuTabs from '../components/foodPage/MenuTabs'; // Ensure correct path

// Optional: Mock the MenuTabs if it depends on external data or contexts
jest.mock('../components/foodPage/MenuTabs', () => () => <div>MenuTabs Mock</div>);

describe("Food Page", () => {
    it("renders the MenuTabs components", () => {
        render(<Food />);

        // Check if MenuTabs component is rendered
        const menuTabs = screen.getByText("MenuTabs Mock");
        expect(menuTabs).toBeInTheDocument();
    });

});
