import React from 'react';
import { render, screen } from '@testing-library/react';
import HealthcareProviderItem from './HealthcareProviderItem';

//ai-gen start (ChatGPT-4, 1)
describe('HealthcareProviderItem', () => {
    const mockDetails = {
        name: 'Dr. John Doe',
        role: 'Physician',
        available: true
    };

    it('renders the provider details correctly', () => {
        render(<HealthcareProviderItem details={mockDetails} />);

        expect(screen.getByText(`${mockDetails.name} - ${mockDetails.role}`)).toBeInTheDocument();
        expect(screen.getByText('Available')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /message/i })).toBeInTheDocument();
    });

    it('displays "Not Available" when the provider is not available', () => {
        const unavailableDetails = { ...mockDetails, available: false };
        render(<HealthcareProviderItem details={unavailableDetails} />);

        expect(screen.getByText('Not Available')).toBeInTheDocument();
    });
});

//ai-gen end