import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header.js';

// AI-gen start
describe('Header component', () => {
  test('renders header content when isOpen is false', async () => {
    // Mock useState to return an array similar to the expected format
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValueOnce([false, jest.fn()]);

    render(<Header width={1024} isOpen={false} setIsOpen={jest.fn()} />);

    // Wait for the "Sushi" button to appear in the DOM
    await screen.findByText('☰');
    await screen.findByAltText('Bunny Icon');

    // Assert that logo, sushi, and profile are rendered
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('☰')).toBeInTheDocument();
    expect(screen.getByAltText('Bunny Icon')).toBeInTheDocument();

    // Clean up
    useStateSpy.mockRestore();
  });

  test('renders header content when isOpen is true', async () => {
    // Mock useState to return an array similar to the expected format
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValueOnce([true, jest.fn()]);

    render(<Header width={1024} isOpen={true} setIsOpen={jest.fn()} />);

    // Wait for the "☰" button and Bunny Icon to appear in the DOM
    await screen.findByText('☰');
    await screen.findByAltText('Bunny Icon');

    // Assert that "☰" button and Bunny Icon are rendered
    expect(screen.getByText('☰')).toBeInTheDocument();
    expect(screen.getByAltText('Bunny Icon')).toBeInTheDocument();

    // Add any additional assertions for elements that should be present when isOpen is true

    // Clean up
    useStateSpy.mockRestore();
  });

  test('clicking on "☰" button toggles isOpen state', async () => {
    const setIsOpenMock = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValueOnce([false, setIsOpenMock]);

    render(<Header width={1024} isOpen={false} setIsOpen={setIsOpenMock} />);

    await screen.findByText('☰');

    fireEvent.click(screen.getByText('☰'));

    expect(setIsOpenMock).toHaveBeenCalledWith(true);

    useStateSpy.mockRestore();
  });
});
  // AI gen end
