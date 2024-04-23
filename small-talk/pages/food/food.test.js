import React from 'react';
import { render, screen } from '@testing-library/react';
import Food from '.'; // Ensure the correct file path and component name are used

jest.mock('@/app/components/foodPage/MenuTabs', () => {
    const MenuTabsMock = () => <div>MenuTabs Mock</div>;
    MenuTabsMock.displayName = 'MenuTabsMock';
    return MenuTabsMock;
  });
  
describe("Food Page", () => {
    it("renders the MenuTabs components", () => {
        render(<Food />);

        // Check if MenuTabs component is rendered
        const menuTabs = screen.getByText("MenuTabs Mock");
        expect(menuTabs).toBeInTheDocument();
    });

});
