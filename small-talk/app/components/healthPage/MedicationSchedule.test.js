import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import MedicationSchedule from './MedicationSchedule';
import medicationData from '../../data/healthData/MedicationData.json';
import MedicationItem from './MedicationItem';
//ai-gen start (ChatGPT-4, 2)

jest.mock('../../data/healthData/MedicationData.json', () => [
    { id: 1, name: 'Medicine A', dose: '2 tablets', time: 'Afternoon', warnings: ['Take with food', 'Do not crush'], taken: false },
    { id: 2, name: 'Medicine B', dose: '1 tablet', time: 'Morning', warnings: ['Take on an empty stomach'], taken: true }
]);

describe('MedicationSchedule', () => {
    it('renders the medication schedule correctly', () => {
        render(<MedicationSchedule />);

        expect(screen.getByText('Daily Medication Schedule')).toBeInTheDocument();
        medicationData.forEach(med => {
            expect(screen.getByText(med.name)).toBeInTheDocument();
            expect(screen.getByText(`Dose: ${med.dose}`)).toBeInTheDocument();
            expect(screen.getByText(`Time: ${med.time}`)).toBeInTheDocument();
            med.warnings.forEach(warning => {
                expect(screen.getByText(warning)).toBeInTheDocument();
            });
            expect(screen.getByRole('button', { name: med.taken ? /mark as not taken/i : /mark as taken/i })).toBeInTheDocument();
        });
        expect(screen.getByLabelText('Allow notifications for future medications')).toBeInTheDocument();
    });

    it('toggles medication taken status when the button is clicked', () => {
        const { rerender } = render(<MedicationSchedule />);
    
        medicationData.forEach((med, index) => {
            const button = screen.getAllByRole('button')[index];
            fireEvent.click(button);
    
            // Rerender the component to reflect the state changes
            rerender(<MedicationSchedule />);
    
            // Check if the taken status of the medication has been toggled
            const updatedButton = screen.getAllByRole('button')[index];
            expect(updatedButton).toHaveTextContent(!med.taken ? /mark as not taken/i : /mark as taken/i);
        });
    });
    

    // it('toggles medication taken status when the button is clicked', () => {
    //     const toggleMedicationTaken = jest.fn();
    
    //     medicationData.forEach(med => {
    //         render(<MedicationItem details={med} onToggleTaken={toggleMedicationTaken} />);
    //         const button = screen.getByRole('button', { name: med.taken ? /mark as not taken/i : /mark as taken/i });
    //         fireEvent.click(button);
    //         expect(toggleMedicationTaken).toHaveBeenCalled();
    //         cleanup();
    //     });
    // });
    

});
// ai-gen end