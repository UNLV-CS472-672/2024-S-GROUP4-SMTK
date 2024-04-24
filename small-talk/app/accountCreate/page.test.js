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
    const firstNameInput = screen.getByPlaceholderText('John'); // hold the credentials for each field in accountCreate
    const lastNameInput = screen.getByPlaceholderText('Doe');
    const dobInput = screen.getByPlaceholderText('Date of Birth');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(firstNameInput, { target: { value: 'Test' } });
    fireEvent.change(lastNameInput, { target: { value: 'User' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'Test@1234' } });

    expect(firstNameInput.value).toBe('Test'); // assert that the values are the same inputted
    expect(lastNameInput.value).toBe('User');
    expect(dobInput.value).toBe('1990-01-01');
    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('Test@1234');
  });

  it('shows an alert for having any field empty', async () => {
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: '' } }); // fields are empty
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: '' } }); 
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await expect(window.alert).toHaveBeenCalledWith("All fields are necessary!"); // assert that the alert displays "All fields are necessary"
  });

  // Following test cases are regards to invalid credentials due to prohibited characters
  it('shows an alert for invalid first name due to prohibited characters', async () => {
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test>' } });  // first name contains prohibited character
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsername' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'invalid>PWord1!' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => expect(validateInput).toHaveBeenCalledWith('Test>')); // assert that validateInput was called with the invalid first name
    await expect(window.alert).toHaveBeenCalledWith("First Name: Too many characters or Use of prohibited characters");
  });
  
  it('shows an alert for invalid last name due to prohibited characters', async () => {
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for first name
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User>' } }); // last name contains prohibited character
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsername' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'invalid>PWord1!' } }); 
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => expect(validateInput).toHaveBeenCalledWith('User>'));// assert that validateInput was called with the invalid last name
    await expect(window.alert).toHaveBeenCalledWith("Last Name: Too many characters or Use of prohibited characters");
  });


  it('shows an alert for invalid username due to prohibited characters', async () => {
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for first name
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for last name
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'invalid/Username!<' } }); // username contains prohibited character
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'ValidPWord1!' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => expect(validateInput).toHaveBeenCalledWith('invalid/Username!<'));// assert that validateInput was called with the invalid username
    await expect(window.alert).toHaveBeenCalledWith("Username: Too many characters or Use of prohibited characters");
  });


  it('shows an alert for invalid password due to prohibited characters', async () => {
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for first name
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for last name
    validateInput.mockResolvedValueOnce(true); // Simulate validation success for username 
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsername' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'invalid>PWord1!' } });  // password contains prohibited character
    fireEvent.click(screen.getByText('Submit'));
  

    await waitFor(() => {
      expect(validateInput).toHaveBeenCalledWith('invalid>PWord1!');// assert that validateInput was called with the invalid password
      expect(window.alert).toHaveBeenCalledWith("Password: Too many characters or Use of prohibited characters");
    });
  });


  it('shows an alert for vulgar language in username', async () => {
    validateInput.mockResolvedValueOnce(true); // simulate validation success for 4 main fields
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    vulgar.mockResolvedValueOnce(true); 

      render(<RegisterPage />);
      fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
      fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User' } });
      fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
      fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'assWonderful' } }); // username contains vulgar language
      fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });
      fireEvent.click(screen.getByText('Submit'));

      await waitFor(() => {
          expect(vulgar).toHaveBeenCalledWith('assWonderful'); // Check if vulgar function is called with the correct argument
          expect(window.alert).toHaveBeenCalledWith("*** Username: Vulgar Language Detected ***");
      });
  });

  it('shows an alert for vulgar language in password', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    vulgar.mockResolvedValueOnce(false); // simulate validation for vulgar check on username
    vulgar.mockResolvedValueOnce(true); // .. for password

    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'Welcome' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'assWonderful1!' } }); // password contains vulgar language
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
        expect(vulgar).toHaveBeenCalledWith('assWonderful1!'); // Check if vulgar function is called with the correct argument
        expect(window.alert).toHaveBeenCalledWith("*** Password: Vulgar Language Detected ***");
    });
  });


  it('shows an alert if the username is included in the password', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsername' } }); // username is in the password
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'validUsername!' } });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Username cannot contain password or vice versa.");
    });
  });

  it('shows an alert if the first name is included in the username', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } }); // first name is included in the username
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsernameTest' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'validPWord!' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Username cannot contain first or last name.");
    });
  });

  it('shows an alert if the last name is included in the password', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } }); // last name is included in the password
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'validUsername' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'CasevalidPWord!' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Password cannot contain first or last name.");
    });
  });

  it('shows an alert if the username is already taken', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    userExists.mockResolvedValueOnce(false); // ensure that the userExists function returns false
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'jd1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Username is already taken!");
    });
  });

  it('shows an alert if the password does not follow the allowed pattern', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'jd1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'lime1234' } }); // password does not contain capital nor special character
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Password must contain at least: \n- one number \n- one uppercase letter \n- one lowercase letter \n- eight(8) characters");
    });
  });

  it('shows an alert if registration was successful', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    handleRegister.mockResolvedValueOnce(!null); // handleRegister does return a user
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'od1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });
    const privacyCheckbox = screen.getByRole('checkbox');
    fireEvent.click(privacyCheckbox); // Uncheck the privacy policy checkbox
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      //expect(window.alert).toHaveBeenCalledWith("Please agree to the Privacy Policy / Terms & Conditions."); 
      expect(window.alert).toHaveBeenCalledWith("Registration was SUCCESSFUL");// handleRegister didn't return null
    });
  });

  it('shows an alert if registration was unsuccessful', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    handleRegister.mockResolvedValueOnce(null); // registration fails, credentials not saved in the DB
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'od1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });
    //fireEvent.click(screen.getAllByLabelText('privacyCheckbox'), { target: { value: true } });
    const privacyCheckbox = screen.getByRole('checkbox');
    fireEvent.click(privacyCheckbox); // Uncheck the privacy policy checkbox
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      //expect(window.alert).toHaveBeenCalledWith("Please agree to the Privacy Policy / Terms & Conditions.");
      expect(window.alert).toHaveBeenCalledWith("Registration was unsuccessful"); // handleRegister returned null
    });
  });

  /* GENERATIVE AI TOOL USED FOR THIS TEST
    Utilized tool: ChatGPT
    Lines said tool suggested: 324-326, 335
    Human Modifications: None (no other method found)
    Rationale behind use: Repeated problem other team members encountered when testing a redirect change; referred to ChatGPT to gain insight on a potential solution
  */
  it('redirects to login page when goLogin is called', () => {
    render(<RegisterPage />);
    
    // Mock the window.location.href setter
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };

    // Trigger the goLogin function
    fireEvent.click(screen.getByText('Cancel'));

    // Assert that window.location.href is set to '/login'
    expect(window.location.href).toBe('/login');

    // Restore the original window.location
    window.location = originalLocation;
  });

  it('shows an alert if privacy checkbox is not checked', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    handleRegister.mockResolvedValueOnce(!null); // handleRegister does return a user
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'od1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });

    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Please agree to the Privacy Policy / Terms & Conditions."); 
    });
  });

  it('shows an alert if registration was successful', async () => {
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);
    validateInput.mockResolvedValueOnce(true);

    handleRegister.mockResolvedValueOnce(!null); // handleRegister does return a user
  
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Case' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'od1924' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Lime1234!' } });
    const privacyCheckbox = screen.getByRole('checkbox');
    fireEvent.click(privacyCheckbox); // Uncheck the privacy policy checkbox
    fireEvent.click(screen.getByText('Submit'));
  
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("By using this web app, you confirm that you are 13 years of age or older, or have obtained parental consent. If you are under 13, please do not use this app without parental permission. We are committed to protecting the privacy of children online and comply with the Children's Online Privacy Protection Act (COPPA). For more information, please review our Privacy Policy.");
    });
  });
});
