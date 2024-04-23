import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import { render, screen } from "@testing-library/react";

describe("ProfileDropdown Component", () =>{
    // Test 1: Test if it is not visible
    it('Checks if component is not visible', () => {
        render(<ProfileDropdown isVisible={false}/>);
        const dropdown = screen.queryByText('Profile');
        expect(dropdown).toBeNull();
    });
    // Test 2: Test if it is visible
    it('Checks if component is visible', () => {
        render(<ProfileDropdown isVisible={true}/>);
        const profile = screen.getByText('Profile');
        const settings = screen.getByText('Settings');
        const logout = screen.getByText('Logout');

        expect(profile).toBeInTheDocument();
        expect(settings).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
    });
    // Test 3: Test if dropdown renders correct properties when visible
    it('Checks if component is visible', () => {
        render(<ProfileDropdown isVisible={true}/>);
        // AI Assisted Code: Data TestID
        const profile = screen.getByTestId('dropdown-link-profile');
        const settings = screen.getByTestId('dropdown-link-settings');
        const logout = screen.getByTestId('dropdown-link-logout');

        expect(profile).toHaveAttribute('href', '/profile');
        expect(settings).toHaveAttribute('href', '/setting');
        expect(logout).toHaveAttribute('href', '/');
    });
});