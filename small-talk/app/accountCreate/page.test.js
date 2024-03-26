import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import RegisterPage from './page.js'; // Ensure this path is correct
import userExists from "@/db/username";
import handleRegister from "@/db/registerToDB";
import validateInput from '@/components/inputValidation';
import vulgar from '@/components/vulgarLang';

jest.mock("@/db/username");
jest.mock("@/db/registerToDB");
jest.mock('@/components/inputValidation');
jest.mock('@/components/vulgarLang');

describe('RegisterPage Component', () => {

    beforeEach(() => {
        // Mock window.alert
        window.alert = jest.fn();
      });
      
  it('renders correctly', () => {
    render(<RegisterPage />);
    screen.debug(); // This will print the rendered output to the console
  });

  it('allows input fields to be filled', () => {
    render(<RegisterPage />);
    const firstNameInput = screen.getByPlaceholderText('John');
    const lastNameInput = screen.getByPlaceholderText('Doe');
    const dobInput = screen.getByPlaceholderText('Date of Birth');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(firstNameInput, { target: { value: 'Test' } });
    fireEvent.change(lastNameInput, { target: { value: 'User' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'Test@1234' } });

    expect(firstNameInput.value).toBe('Test');
    expect(lastNameInput.value).toBe('User');
    expect(dobInput.value).toBe('1990-01-01');
    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('Test@1234');
  });



  /* Below are where more tests should be added */
//   it('shows an alert for invalid username due to prohibited characters', async () => {
//     validateInput.mockResolvedValueOnce(false); // Simulate validation failure for username
//     vulgar.mockResolvedValueOnce(false); // Assume no vulgar language for simplicity
  
//     render(<RegisterPage />);
//     fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'invalidUsername!' } });
//     fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'ValidPassword1!' } });
//     fireEvent.click(screen.getByText('Submit'));
  
//     await waitFor(() => expect(validateInput).toHaveBeenCalledWith('invalidUsername!'));
//     expect(window.alert).toHaveBeenCalledWith("Username: Too many characters or Use of prohibited characters");
//   });
//   // More tests will be added here
});
