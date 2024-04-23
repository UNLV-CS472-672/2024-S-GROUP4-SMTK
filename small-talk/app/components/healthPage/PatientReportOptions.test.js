import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientReportOptions from './PatientReportOptions';
//ai-gen start (ChatGPT-4, 1)

describe('PatientReportOptions', () => {
    const mockDetails = {
        id: 1,
        question: 'Question 1',
        options: ['Option 1', 'Option 2']
    };
    const mockSetValue = jest.fn();

    it('renders the options report question correctly', () => {
        render(<PatientReportOptions details={mockDetails} value="" setValue={mockSetValue} />);

        expect(screen.getByText(mockDetails.question)).toBeInTheDocument();
        mockDetails.options.forEach(option => {
            expect(screen.getByLabelText(option)).toBeInTheDocument();
        });
    });

    it('calls setValue with the correct value when an option is selected', () => {
        render(<PatientReportOptions details={mockDetails} value="" setValue={mockSetValue} />);

        fireEvent.click(screen.getByLabelText(mockDetails.options[0]));
        expect(mockSetValue).toHaveBeenCalledWith(mockDetails.options[0]);
    });
});
//ai-gen end