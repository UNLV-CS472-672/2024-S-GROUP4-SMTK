import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MedicationItem from './MedicationItem';
//ai-gen start (ChatGPT-4, 1)

describe('MedicationItem', () => {
    const mockDetails = {
        name: 'Medicine A',
        dose: '2 tablets',
        time: 'Afternoon',
        warnings: ['Take with food', 'Do not crush'],
        taken: false
    };
    const mockToggleTaken = jest.fn();

    it('renders the medication details correctly', () => {
        render(<MedicationItem details={mockDetails} onToggleTaken={mockToggleTaken} />);

        expect(screen.getByText(mockDetails.name)).toBeInTheDocument();
        expect(screen.getByText(`Dose: ${mockDetails.dose}`)).toBeInTheDocument();
        expect(screen.getByText(`Time: ${mockDetails.time}`)).toBeInTheDocument();
        mockDetails.warnings.forEach(warning => {
            expect(screen.getByText(warning)).toBeInTheDocument();
        });
        expect(screen.getByRole('button', { name: /mark as taken/i })).toBeInTheDocument();
    });

    it('calls onToggleTaken when the button is clicked', () => {
        render(<MedicationItem details={mockDetails} onToggleTaken={mockToggleTaken} />);

        fireEvent.click(screen.getByRole('button', { name: /mark as taken/i }));
        expect(mockToggleTaken).toHaveBeenCalled();
    });

    it('displays "Mark as Not Taken" when the medication is taken', () => {
        const takenDetails = { ...mockDetails, taken: true };
        render(<MedicationItem details={takenDetails} onToggleTaken={mockToggleTaken} />);

        expect(screen.getByRole('button', { name: /mark as not taken/i })).toBeInTheDocument();
    });
});
//ai-gen end 
