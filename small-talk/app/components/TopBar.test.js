import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TopBar from './TopBar';

jest.mock('./ProfileDropdown', () => ({ isVisible }) => isVisible ? <div>Profile Options</div> : null);

describe('TopBar Component', () => {
    let toggleSidebarMock;

    beforeEach(() =>{
        toggleSidebarMock = jest.fn();
        render(<TopBar toggleSidebar={ toggleSidebarMock }/>);
    });

    
    it('toggles the sidebar when the three-bar icon is clicked', () => {
        const threeBarButton = screen.getByAltText('Three Bar');
        fireEvent.click(threeBarButton);
        expect(toggleSidebarMock).toHaveBeenCalledTimes(1);
    });

    it('redirects to the correct path when the homepage button is clicked', () => {
        const homeButton = screen.getByTestId('logo-home');
        fireEvent.click(homeButton);
        expect(homeButton).toHaveAttribute("href", '/homepage');
    });

    it('toggles dropdown visibility on profile button click', () => {
        const profileButton = screen.getByAltText('Profile');
        // Check if the dropdown is now visible
        fireEvent.click(profileButton);
        expect(screen.getByText('Profile Options')).toBeInTheDocument();
        
        // Check if the dropdown is hidden after another click
        fireEvent.click(profileButton);
        expect(screen.queryByText('Profile Options')).toBeNull();   
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });
});
