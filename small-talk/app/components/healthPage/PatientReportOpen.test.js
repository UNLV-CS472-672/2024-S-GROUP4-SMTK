import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientReportOpen from './PatientReportOpen';
//ai-gen start (ChatGPT-4, 1)

describe('PatientReportOpen', () => {
    const mockDetails = {
        id: 1,
        question: 'Question 1',
        name: 'question1',
        placeholder: 'Enter your response here'
    };
    const mockSetValue = jest.fn();

    it('renders the open report question correctly', () => {
        render(<PatientReportOpen details={mockDetails} value="" setValue={mockSetValue} />);

        expect(screen.getByText(mockDetails.question)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(mockDetails.placeholder)).toBeInTheDocument();
    });

    it('calls setValue with the correct value when the text area is changed', () => {
        render(<PatientReportOpen details={mockDetails} value="" setValue={mockSetValue} />);

        fireEvent.change(screen.getByPlaceholderText(mockDetails.placeholder), { target: { value: 'Test' } });
        expect(mockSetValue).toHaveBeenCalledWith('Test');
    });
});
//ai-gen end 
