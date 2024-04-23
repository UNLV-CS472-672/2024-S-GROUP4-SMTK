import React from 'react';
import { render, screen } from '@testing-library/react';
import HealthcareTeam from './HealthcareTeam';
import providerData from '../../data/healthData/ProviderData.json';
//ai-gen start (ChatGPT-4, 0)

jest.mock('../../data/healthData/ProviderData.json', () => [
    { id: 1, name: 'Dr. John Doe', role: 'Physician', available: true },
    { id: 2, name: 'Dr. Jane Doe', role: 'Surgeon', available: false }
]);

describe('HealthcareTeam', () => {
    it('renders the healthcare team correctly', () => {
        render(<HealthcareTeam />);

        expect(screen.getByText('Your Healthcare Team')).toBeInTheDocument();
        providerData.forEach(provider => {
            expect(screen.getByText(`${provider.name} - ${provider.role}`)).toBeInTheDocument();
            expect(screen.getByText(provider.available ? 'Available' : 'Not Available')).toBeInTheDocument();
        });
    });
});
//ai-gen end