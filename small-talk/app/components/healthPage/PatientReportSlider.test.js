import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientReportSlider from './PatientReportSlider';
//ai-gen start (ChatGPT-4, 2)

describe('PatientReportSlider', () => {
    const mockDetails = {
        id: 1,
        question: 'Question 1',
        min: 0,
        max: 10
    };
    const mockSetValue = jest.fn();

    it('renders the slider report question correctly', () => {
        render(<PatientReportSlider details={mockDetails} value={5} setValue={mockSetValue} />);
    
        expect(screen.getByText(mockDetails.question)).toBeInTheDocument();
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('min', mockDetails.min.toString());
        expect(slider).toHaveAttribute('max', mockDetails.max.toString());
    });
    
    

    it('calls setValue with the correct value when the slider is changed', () => {
        render(<PatientReportSlider details={mockDetails} value={mockDetails.min} setValue={mockSetValue} />);

        fireEvent.change(screen.getByRole('slider'), { target: { value: mockDetails.max.toString() } });
        expect(mockSetValue).toHaveBeenCalledWith(mockDetails.max.toString());
    });
});
// ai-gen end