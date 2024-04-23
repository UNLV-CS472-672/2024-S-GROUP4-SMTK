import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientReport from './PatientReport';
import reportItems from '../../data/healthData/PatientReportQuestions.json';
//ai-gen start (ChatGPT-4, 2)

jest.mock('../../data/healthData/PatientReportQuestions.json', () => [
    { id: 1, type: 'slider', question: 'Question 1', min: 0, max: 10 },
    { id: 2, type: 'options', question: 'Question 2', options: ['Option 1', 'Option 2'] },
    { id: 3, type: 'open', question: 'Question 3' }
]);

describe('PatientReport', () => {
    it('renders the patient report correctly', () => {
        render(<PatientReport />);

        expect(screen.getByText('Daily Health Report')).toBeInTheDocument();
        reportItems.forEach(item => {
            expect(screen.getByText(item.question)).toBeInTheDocument();
        });
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('resets the responses when the submit button is clicked', () => {
        const { getByRole, getAllByRole } = render(<PatientReport />);
        const submitButton = getByRole('button', { name: /submit/i });

        // Assuming that the initial state of each question is visible in the UI
        const initialStates = getAllByRole('textbox').map(input => input.value);

        // Change the state of each question
        getAllByRole('textbox').forEach(input => {
            fireEvent.change(input, { target: { value: 'Test' } });
        });

        // Click the submit button to reset the responses
        fireEvent.click(submitButton);

        // Check if the responses have been reset
        const finalStates = getAllByRole('textbox').map(input => input.value);
        expect(finalStates).toEqual(initialStates);
    });
});
//ai-gen end 
