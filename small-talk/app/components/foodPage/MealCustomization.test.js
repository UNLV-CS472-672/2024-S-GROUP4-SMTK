import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MealCustomization from './MealCustomization';
// Most of these tests were generated using ChatGPT
describe('MealCustomization Component', () => {
    // Render test
    it('renders the customization options correctly', () => {
        render(<MealCustomization />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes.length).toBe(10);  // Expect to find 10 checkboxes
        expect(screen.getByText('Submit Customization')).toBeInTheDocument();
    });

    // Checkbox interaction test
    it('allows toggling of dietary options', () => {
        render(<MealCustomization />);
        const veganOption = screen.getByLabelText('Vegan');
        fireEvent.click(veganOption);
        expect(veganOption).toBeChecked();
        fireEvent.click(veganOption);
        expect(veganOption).not.toBeChecked();
    });

    // Form submission test
    it('submits the selected options', () => {
        const logSpy = jest.spyOn(console, 'log');
        render(<MealCustomization />);
        const veganOption = screen.getByLabelText('Vegan');
        fireEvent.click(veganOption);
        const submitButton = screen.getByRole('button', { name: 'Submit Customization' });
        fireEvent.click(submitButton);
        expect(logSpy).toHaveBeenCalledWith('Selected Options:', { vegan: true, glutenFree: false, nutFree: false, dairyFree: false, vegetarian: false, lowSodium: false, noAddedSugar: false, keto: false, paleo: false, halal: false });
    });
});

