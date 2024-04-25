import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuTabs from './MenuTabs';
import VisualMenuComponent from './VisualMenuComponent'; // Assuming this is mocked
import PastOrders from './PastOrders'; // Assuming this is mocked
import MealCustomization from './MealCustomization'; // Assuming this is mocked
//The majority of these test cases were created using ChatGPT as this is still a gap in my knowledge as I'm new to the language.
jest.mock('./VisualMenuComponent', () => {
    const MockVisualMenuComponent = () => <div>VisualMenuComponent Content</div>;
    MockVisualMenuComponent.displayName = 'VisualMenuComponent';
    return MockVisualMenuComponent;
  });
  
  jest.mock('./PastOrders', () => {
    const MockPastOrders = () => <div>Past Orders Content</div>;
    MockPastOrders.displayName = 'PastOrders';
    return MockPastOrders;
  });
  
  jest.mock('./MealCustomization', () => {
    const MockMealCustomization = () => <div>MealCustomization Content</div>;
    MockMealCustomization.displayName = 'MealCustomization';
    return MockMealCustomization;
  });
  

describe('MenuTabs Component', () => {
    beforeEach(() => {
        render(<MenuTabs />);
    });

    it('displays VisualMenuComponent when "Order Food" and "Lunch" are selected', () => {
        // First, click the "Order Food" tab to ensure sub-tabs are visible
        fireEvent.click(screen.getByText('Order Food'));
        // Then, click the "Lunch" sub-tab
        fireEvent.click(screen.getByText(/Lunch/));

        // Check if the class changes to indicate selection
        const lunchButton = screen.getByText(/Lunch/).closest('button');
        expect(lunchButton).toHaveClass('bg-blue-100 text-black');

        // Check if VisualMenuComponent for Lunch is displayed
        expect(screen.getByText('VisualMenuComponent Content')).toBeInTheDocument();
    });

    it('displays VisualMenuComponent when "Order Food" and "Breakfast" are selected and toggles visibility', () => {
        fireEvent.click(screen.getByText('Order Food'));
        const breakfastButton = screen.getByText(/Breakfast/);
        
        // Initially click to show
        fireEvent.click(breakfastButton);
        expect(breakfastButton).toHaveClass('bg-blue-100 text-black'); // Check if the button shows active styling
        expect(screen.getByText('VisualMenuComponent Content')).toBeInTheDocument(); // Check if content is displayed
    
        // Click again to hide
        fireEvent.click(breakfastButton);
        expect(breakfastButton).not.toHaveClass('bg-blue-100 text-black'); // Verify it toggles back
    });
    
    it('displays VisualMenuComponent when "Order Food" and "Dinner" are selected and toggles visibility', () => {
        fireEvent.click(screen.getByText('Order Food'));
        const dinnerButton = screen.getByText(/Dinner/);
        
        // Initially click to show
        fireEvent.click(dinnerButton);
        expect(dinnerButton).toHaveClass('bg-blue-100 text-black'); // Check if the button shows active styling
        expect(screen.getByText('VisualMenuComponent Content')).toBeInTheDocument(); // Check if content is displayed
    
        // Click again to hide
        fireEvent.click(dinnerButton);
        expect(dinnerButton).not.toHaveClass('bg-blue-100 text-black'); // Verify it toggles back
    });
    

    

    it('displays PastOrders component when there are past orders', () => {
        // Assuming you're modifying the mock within the same test file context
        // or adjust the test to fit how your data is actually loaded.
        fireEvent.click(screen.getByText('Past Orders'));
        expect(screen.getByText('Past Orders Content')).toBeInTheDocument();
    });

    it('displays MealCustomization when "Meal Customization" is selected', () => {
        fireEvent.click(screen.getByText('Meal Customization'));
        expect(screen.getByText('MealCustomization Content')).toBeInTheDocument();
    });
});
