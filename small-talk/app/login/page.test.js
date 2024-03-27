import React from 'react';
const { render, screen, fireEvent, waitFor } = require('@testing-library/react');
import LoginPage from './page';
import validateInput from '@/components/inputValidation';

describe('Page component', () => {

    beforeEach(() => {
        render(<LoginPage />);
    });

    test('renders without errors', () => {
        expect(screen.getByTestId('login')).toBeInTheDocument();
    });

    test('handles blank username and password', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        // Get the input fields and the submit button
        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText('Submit');

        // Update the input fields
        fireEvent.change(usernameInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: '' } });

        // Submit the form
        fireEvent.click(submitButton);

        expect(alertMock).toHaveBeenCalledWith("All fields are necessary!");
        alertMock.mockRestore();
    });

    test('handles invalid username and password', async () => {
        const username = '<><><><>';
        const password = 'invalidPassword';
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByTestId('submit');

        // Update the input fields
        fireEvent.change(usernameInput, { target: { value: username } });
        fireEvent.change(passwordInput, { target: { value: password } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            // Check if the alert is called with the correct message
            expect(alertMock).toHaveBeenCalledWith('INVALID');
        });
        
        // Restore the mocks
        alertMock.mockRestore();
        
    });
});