import React, { useState } from 'react';
import Sushi from './sushi.js';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Sushi component', () => {
    it('should render without crashing', () => {
        const setIsOpen = jest.fn();
        render(<Sushi isOpen={false} setIsOpen={setIsOpen} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call setIsOpen when clicked', () => {
        const setIsOpen = jest.fn();
        render(<Sushi isOpen={false} setIsOpen={setIsOpen} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(setIsOpen).toHaveBeenCalled();
    });
});